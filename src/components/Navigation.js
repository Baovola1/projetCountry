import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";

const Navigation = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          typography: "body1",
          "& > :not(style) ~ :not(style)": {
            ml: 4,
          },
        }}
      >
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>

        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/about"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          About
        </Link>
      </Box>
    </div>
  );
};

export default Navigation;
