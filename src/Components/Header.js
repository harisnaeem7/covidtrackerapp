import React, { useEffect } from "react";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <Box style={{ maxWidth: 600, margin: "0 auto", padding: "20px" }}>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center" }}>
        <h2>COVID</h2>
        <h3 sx={{ mt: "10px", mb: "5px" }}>Tracker</h3>
      </Box>
    </Box>
  );
};

export default Header;
