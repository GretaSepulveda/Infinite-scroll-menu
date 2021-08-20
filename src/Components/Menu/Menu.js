import React from "react";
import MenuTitle from "../MenuTitle/MenuTitle";
import Signature from "../Signature/Signature";
import Lunchsets from "../Lunchsets/Lunchsets";
import Dinner from "../Dinner/Dinner";
import HomeButton from "../HomeButton/HomeButton";
import "./Menu.css";

export default function Menu() {
  return (
    <div>
      <div className="Menu-Container" id="Menu">
        <MenuTitle />
        <Signature />
        <Lunchsets />
        <Dinner />
      </div>
      <HomeButton />
    </div>
  );
}
