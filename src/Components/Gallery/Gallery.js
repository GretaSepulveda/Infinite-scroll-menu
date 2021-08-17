import React from "react";
import "./Gallery.css";
import ImageSliderComponent from "./image-slider.component";

export default function Gallery() {
  return (
    <div className="Gallery-header" id="Gallery">
      <h4 id="Dancing-script">
        <mark class="Specific-text">Image</mark>
      </h4>
      <h3>Gallery</h3>
      <ImageSliderComponent/>
    </div>
  );
}