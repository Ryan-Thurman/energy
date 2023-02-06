import React from "react";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";

import { Forecast } from "../types/Types";
import WeatherCard from "../components/weatherCard";

export default function WeatherForecast() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["forecast"],
    queryFn: async () => {
      const {
        data: { properties },
      } = await axios.get(
        "https://api.weather.gov/gridpoints/LWX/89,70/forecast/hourly"
      );

      return properties;
    },
  });

  if (isLoading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div> some error</div>;
  }
  // seems strange
  const currentDay = data.periods.slice(0, 24);

  return currentDay.map(
    (
      {
        endTime,
        startTime,
        icon,
        shortForecast,
        temperature,
        temperatureUnit,
        windDirection,
        windSpeed,
      }: Forecast,
      idx: number
    ) => {
      const delta =
        idx > 0
          ? currentDay[idx - 1].temperature - currentDay[idx].temperature
          : 0;

      return (
        <WeatherCard
          key={startTime}
          endTime={endTime}
          startTime={startTime}
          icon={icon}
          shortForecast={shortForecast}
          temperature={temperature}
          temperatureUnit={temperatureUnit}
          windDirection={windDirection}
          windSpeed={windSpeed}
          delta={delta}
        />
      );
    }
  );
}
