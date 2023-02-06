import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function infoCard() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Typography variant="h4">
        Viewing data for Tyson's Corner, Virginia
      </Typography>
    </Box>
  );
}
