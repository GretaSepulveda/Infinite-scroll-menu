import React from "react";
import HomeButton from "../HomeButton/HomeButton";
import Map from "../Images/map.png";
import "./FindUs.css";

export default function FindUs() {
  return (
    <div>
      <div className="FindUs-Container" id="FindUs">
        <div className="Map-Child-Container">
          <img className="Map" src={Map} alt="Google map"></img>
        </div>
        <div className="Location">
          <h3 id="Dancing-script">Branch</h3>
          <h2>Center</h2>
          <p>Grand Restaurant Paragon</p>
          <p>732/21 Second Street, Manchester</p>
          <p>King Street, Kingston United Kingdom</p>
          <p>1 800 456 6743</p>
        </div>
      </div>
      <HomeButton />
    </div>
  );
}
