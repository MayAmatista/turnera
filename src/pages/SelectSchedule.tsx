import React from "react";
import { Button, Typography, Card, CardContent, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppState } from "../AppStateContext";
import slotsData from "../api/slots.json";
import { ScheduleData } from "../interfaces/ScheduleData";
import { useTheme } from "@mui/material/styles";

const SelectSchedule: React.FC = () => {
  const theme = useTheme();
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
    <Card variant="outlined" style={{ padding: "20px", height: "100%" }}>
      <CardContent>
        <Typography variant="h5" color="primary" gutterBottom>
          Próximos turnos disponibles
        </Typography>
        {scheduleData.map((scheduleItem, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <Typography
              variant="body1"
              color="primary"
              style={{ marginBottom: "10px" }}
            >
              {scheduleItem.date}
            </Typography>
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
                          ? theme.palette.primary.main
                          : "white",
                      color:
                        selectedDateTime &&
                        selectedDateTime.date === scheduleItem.date &&
                        selectedDateTime.timeslot === timeslot
                          ? "white"
                          : theme.palette.text.primary,
                    }}
                  >
                    {timeslot}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "20px",
            marginTop: "20px",
          }}
        >
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
      </CardContent>
    </Card>
  );
};

export default SelectSchedule;
