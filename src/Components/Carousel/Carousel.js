import React from "react";
import { Parallax } from "react-parallax";
import Dimsum from "../Images/dim-sum.jpeg";
import "./Carousel.css";

export default function Carousel() {
  return (
    <div className="Carousel-Container">
      <Parallax className="Carousel" bgImage={Dimsum}>
        <div className="Welcome-Message">
          <h4 id="Dancing-script">
            <mark class="Specific-text">Welcome</mark> to
          </h4>
          <h2>Grand Avenue</h2>
          <p>Making delicious premium food since 1950</p>
        </div>
      </Parallax>
    </div>
  );
}