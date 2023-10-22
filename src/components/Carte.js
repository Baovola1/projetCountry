import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";

function Carte({ country }) {
  return (
    <Container
      sx={{
        maxWidth: 250,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Card
        sx={{
          width: 220,
          borderRadius: "15px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            src={country.flags.svg}
            alt={"drapeau" + country.translations.fra.common}
            height="140"
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h5" component="div">
              {country.translations.fra.common}
            </Typography>
            <h4>{country.capital}</h4>
            <p>Pop.{country.population.toLocaleString()}</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}

export default Carte;
