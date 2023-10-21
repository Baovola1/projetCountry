import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
//import HomeIcon from "@mui/icons-material/Home";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import WhatshotIcon from "@mui/icons-material/Whatshot";
//import AppBar from "@mui/material/AppBar";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    // <AppBar sx={{ backgroundColor: "dark", height: "4vh", width: "100%" }}>
    <header
      style={{
        backgroundColor: "cyan",
        height: "5vh",
        width: "100%",
        paddingTop: "0",
        marginTop: "0",
      }}
    >
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
          component={RouterLink}
          to="/"
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
        >
          <TravelExploreIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>

        <Link
          component={RouterLink}
          to="/about"
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          About
        </Link>
        <Link
          component={RouterLink}
          to="/blog"
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
        >
          <HistoryEduIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Blog
        </Link>
      </Box>
    </header>
    //  </AppBar>
  );
};

export default Navigation;
