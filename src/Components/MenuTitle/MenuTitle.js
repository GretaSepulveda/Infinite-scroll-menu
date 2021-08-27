import React from "react";
import { Parallax } from "react-parallax";
import Porktenderloin from "../Images/pork-tenderloin.jpg";
import "./MenuTitle.css";

export default function MenuTitle() {
  return (
    <div className="Menu-title-container">
      <Parallax className="Parallax" bgImage={Porktenderloin}>
        <div className="Menu-title-text">
          <h3 id="Dancing-script">Chef</h3>
          <h3>Menu</h3>
          <p>Check out our signature menus below now</p>
        </div>
      </Parallax>
    </div>
  );
}
