import React from "react";
import { Card, CardContent, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppState } from "../AppStateContext";
import slotsData from "../api/slots.json";
import { ScheduleData } from "../interfaces/ScheduleData";

const SelectSchedule: React.FC = () => {
  const { selectedDateTime, setSelectedDateTime } = useAppState();

  const scheduleData: ScheduleData[] = slotsData;

  if (!scheduleData || scheduleData.length === 0) {
    return <div>Loading...</div>;
  }

  const handleTimeSlotClick = (date: string, timeslot: string) => {
    const selectedDateTime = { date, timeslot };
    setSelectedDateTime(selectedDateTime);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {scheduleData.map((scheduleItem, index) => (
        <div key={index}>
          <Typography variant="h4" style={{ marginBottom: "20px" }}>
            {scheduleItem.date}
          </Typography>
          <div style={{ flex: 1 }}>
            <Card>
              <CardContent>
                <Grid container spacing={1}>
                  {scheduleItem.availableTimeslots.map((timeslot, index) => (
                    <Grid item xs={3} key={index}>
                      <Button
                        variant={
                          selectedDateTime &&
                          selectedDateTime.date === scheduleItem.date &&
                          selectedDateTime.timeslot === timeslot
                            ? "contained"
                            : "outlined"
                        }
                        onClick={() =>
                          handleTimeSlotClick(scheduleItem.date, timeslot)
                        }
                        style={{
                          margin: "5px",
                          width: "100%",
                          backgroundColor:
                            selectedDateTime &&
                            selectedDateTime.date === scheduleItem.date &&
                            selectedDateTime.timeslot === timeslot
                              ? "blue"
                              : "white",
                          color:
                            selectedDateTime &&
                            selectedDateTime.date === scheduleItem.date &&
                            selectedDateTime.timeslot === timeslot
                              ? "white"
                              : "black",
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
        </div>
      ))}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/select-service">
          <Button variant="contained" color="primary">
            Anterior
          </Button>
        </Link>
        {selectedDateTime && (
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
