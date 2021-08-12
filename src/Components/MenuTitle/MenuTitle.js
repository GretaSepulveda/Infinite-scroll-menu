import React from "react";
import { Parallax } from "react-parallax";
import Burgergrilling from "../Images/Burgergrilling.jpeg";
import "./MenuTitle.css";

export default function MenuTitle() {
  return (
    <div className="Menu-title-container">
      <Parallax className="Parallax" bgImage={Burgergrilling}>
        <div className="Menu-title-text">
          <h3 id="Dancing-script">Chef</h3>
          <h3>Menu</h3>
          <p>Check out our signature menus</p>
        </div>
      </Parallax>
    </div>
  );
}
