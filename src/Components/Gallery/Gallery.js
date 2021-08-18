import React from "react";
import ImageSliderComponent from "./image-slider.component";
import "./Gallery.css";


export default function Gallery() {
  return (
    <div className="Gallery-header" id="Gallery">
      <h4 id="Dancing-script">
        <mark class="Specific-text">Image</mark>
      </h4>
      <h3>Gallery</h3>

      <ImageSliderComponent/>

      <ImageSliderComponent />

    </div>
  );
}
