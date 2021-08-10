import React from "react";
import Dumplingplate from "../Images/Dumplingplate.jpeg";

export default function Carousel() {
  return (
    <div classname="Carousel-Container">

<div id="background">
  <h2 className="Carousel-img"></h2>
      <img src={Dumplingplate} alt="Dumpling"/>
      </div>
      <div>
        <h2>top carousel placeholder</h2>
        <h2 className="Carousel-img">Top carousel img placeholder</h2>

      </div>

      <img src={Dumplingplate} alt="Dumpling" />

    </div>
  );
}
