import React from "react";
import Dumplingplate from "../Images/Dumplingplate.jpeg";


export default function Carousel() {
  return (
    <div classname="Carousel-Container">

      <h2 className="Carousel-img">Carousel placeholder</h2>
      <img src={Dumplingplate} alt="Dumpling"/>
      


      <div>
        <h2>top carousel placeholder</h2>
        <h2 className="Carousel-img">Top carousel img placeholder</h2>

      </div>
    </div>
  );
}
