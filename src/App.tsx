import "./App.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Box } from "@mui/material";

import WeatherForecast from "./page/WeatherForecast";
import InfoCard from "./components/infoCard";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <InfoCard />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          maxWidth: "100vw",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <WeatherForecast />
      </Box>
    </QueryClientProvider>
  );
};

export default App;
