import React from "react";
import MenuTitle from "../MenuTitle/MenuTitle";
import Signature from "../Signature/Signature";
import Lunchsets from "../Lunchsets/Lunchsets";
import Dinner from "../Dinner/Dinner";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="Menu-Container">
      <MenuTitle />
      <Signature />
      <Lunchsets />
      <Dinner />
    </div>
  );
}
