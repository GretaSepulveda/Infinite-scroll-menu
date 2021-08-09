import React from "react";
import "./About.css";
import PotStickers from "../Images/PotStickers.jpeg";

export default function About() {
  return (
    <div classname="Story-Container">
      <div classname="Our-Story">
        <h3>
          Until I discovered our story I was never really interested in anything
        </h3>
        <h5>Our Founder John Phillipe</h5>
      </div>
      <div className="PotStickers-container">
        <img src={PotStickers} alt="Pot stickers" />
      </div>
    </div>
  );
}
