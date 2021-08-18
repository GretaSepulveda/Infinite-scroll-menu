import React from "react";
// import Map from "../Map/Map";
import "./FindUs.css";

export default function FindUs() {
  return (
    <div className="FindUs-Container" id="FindUs">
      <div className="Location">
        <h3 id="Dancing-script">Branch</h3>
        <h2>Center</h2>
        <p>Grand Restaurant Paragon</p>
        <p>732/21 Second Street, Manchester</p>
        <p>King Street, Kingston United Kingdom</p>
        <p>1 800 456 6743</p>
      </div>
      <div className="Map-Child-Container">{/* <Map /> */}</div>
    </div>
  );
}

// commenting out map for future use
