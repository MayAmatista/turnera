import React, { useState } from "react";
import { Card, CardContent, Button, Grid } from "@mui/material";
import slotsData from "../api/slots.json";
import { Link } from "react-router-dom";
import { ScheduleData } from "../interfaces/ScheduleData";
import { SelectScheduleProps } from "../interfaces/SelectScheduleProps";

const SelectSchedule: React.FC<SelectScheduleProps> = ({
  selectedDate,
  setSelectedDate,
}) => {
  const scheduleData: ScheduleData = slotsData;
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  if (!scheduleData) {
    return <div>Loading...</div>;
  }

  const handleTimeSlotClick = (timeslot: string) => {
    if (selectedTimeSlot === timeslot) {
      setSelectedTimeSlot(null);
    } else {
      setSelectedTimeSlot(timeslot);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <h1>{scheduleData.date}</h1>
      <div style={{ flex: 1 }}>
        <Card>
          <CardContent>
            <Grid container spacing={1}>
              {scheduleData.availableTimeslots.map((timeslot, index) => (
                <Grid item xs={3} key={index}>
                  <Button
                    variant={
                      selectedTimeSlot === timeslot ? "contained" : "outlined"
                    }
                    onClick={() => handleTimeSlotClick(timeslot)}
                    style={{
                      margin: "5px",
                      width: "100%",
                      backgroundColor:
                        selectedTimeSlot === timeslot ? "blue" : "white",
                      color: selectedTimeSlot === timeslot ? "white" : "black",
                    }}
                  >
                    {timeslot}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/select-service">
          <Button variant="contained" color="primary">
            Anterior
          </Button>
        </Link>
        {selectedTimeSlot && (
          <Link to="/confirm-appointment">
            <Button variant="contained" color="primary">
              Siguiente
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SelectSchedule;
