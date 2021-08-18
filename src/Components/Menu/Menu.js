import React from "react";
import MenuTitle from "../MenuTitle/MenuTitle";
import Signature from "../Signature/Signature";
import Lunchsets from "../Lunchsets/Lunchsets";
import Dinner from "../Dinner/Dinner";
import "./Menu.css";

// function homeButton() {

// }

export default function Menu() {
  return (
    <div className="Menu-Container" id="Menu">
      <MenuTitle />
      <Signature />
      <Lunchsets />
      <Dinner />
    </div>
  );
}
