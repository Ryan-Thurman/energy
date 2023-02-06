import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

import { Forecast } from "../types/Types";
import { FormatDate } from "../utils";
import CenterBox from "./styled/CenterBox";

export default function WeatherCard({
  endTime,
  startTime,
  icon,
  shortForecast,
  temperature,
  temperatureUnit,
  windDirection,
  windSpeed,
  delta = 0,
}: Forecast) {
  return (
    <Card sx={{ minWidth: 275, margin: "1%" }}>
      <Box>
        <CardContent>
          <CenterBox>
            <Typography variant="body1" sx={{ mb: 1.5 }}>
              {FormatDate(startTime)} - {FormatDate(endTime)}
            </Typography>
            <Avatar
              src={icon}
              sx={{
                width: 56,
                height: 56,
                mb: 1.5,
              }}
            />
          </CenterBox>
          <CenterBox>
            <Typography variant="body1" sx={{ mb: 1 }}>
              {shortForecast} {`${temperature} ${temperatureUnit}`}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: delta > 0 ? "red" : "blue", mb: 1 }}
            >
              {delta === 0
                ? "No temperature change"
                : `temperature change ${delta} degree`}
            </Typography>
            <Typography sx={{ fontSize: 16, mb: 1 }}>
              Wind - {`${windDirection} ${windSpeed}`}
            </Typography>
          </CenterBox>
        </CardContent>
      </Box>
    </Card>
  );
}
