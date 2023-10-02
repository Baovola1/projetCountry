import React from "react";
import { NavLink } from "react-router-dom";
import { Slider } from "@material-tailwind/react";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="flex w-96 flex-col gap-8">
        <Slider color="green" defaultValue={50} />
      </div>
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>acceuil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>à propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
