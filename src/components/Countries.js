import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Chip from "@mui/material/Chip";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Carte from "./Carte";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  //const [selectedRadio, setSelectedRadio] = useState("a");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  //Ici, ne plus toucher=> ok
  const [open, setOpen] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(null);

  const handleRadioChange = (continent) => {
    setSelectedRadio(continent);
    setOpen(false);
  };

  const actions = radios.map((continent) => (
    <SpeedDialAction
      key={continent}
      icon={
        <input
          type="radio"
          id={continent}
          name="continentRadio"
          checked={continent === selectedRadio}
          readOnly
        />
      }
      tooltipTitle={continent}
      onClick={() => handleRadioChange(continent)}
    />
  ));

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setData(response.data));
  }, []);

  return (
    <div className="countries">
      <Box sx={{ width: 300 }}>
        <Slider
          min={1}
          max={250}
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
          color="secondary"
        />
      </Box>

      <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{
            position: "absolute",
            //bottom: 16,
            left: 16,
            flexDirection: "row",
            justifyContent: "center",
            margin: "7px",
          }}
          icon={<SpeedDialIcon />}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
        >
          {actions}
        </SpeedDial>
      </Box>

      {selectedRadio && (
        <Chip
          label="Annuler la recherche"
          onClick={() => setSelectedRadio("")}
        />
      )}

      <ul style={{ display: "flex", flexDirection: "row" }}>
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => (
            <Carte key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
