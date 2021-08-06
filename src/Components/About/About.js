import React from "react";
import PotStickers from "../Images/PotStickers.jpeg";
import "./About.css";

export default function About() {
  return (
    <div classname="About-Container">
      <div classname="About">
        <h2>
          Until I discovered our story I was never really interested in anything
        </h2>
        <h4>Our Founder John Phillipe</h4>
      </div>
      <div className="PotStickers-container">
        <img src={PotStickers} alt="Pot stickers" />
      </div>
    </div>
  );
}
