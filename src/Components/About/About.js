import React from "react";
import "./About.css";
import PotStickers from "../Images/PotStickers.jpeg";

export default function About() {
  return (
    <div className="Story-Container" id="About-us">
      <div className="Our-Story">
        <h4>
          Until I discovered cooking I was never really interested in anything
        </h4>
        <p>Our founder John Phillipe</p>
        <h5 id="Dancing-script">John Phillipe</h5>
      </div>
      <div className="PotStickers-container">
        <img
          src={PotStickers}
          alt="Pot stickers"
          width="400px"
          height="400px"
        />
        <div className="Discover-story">
          <h4 className="Discover" id="Dancing-script">
            Discover
          </h4>
          <p>our story</p>
        </div>
      </div>
    </div>
  );
}
