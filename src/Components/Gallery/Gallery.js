import { ImageSearch } from "@material-ui/icons";
import React from "react";
import "./Gallery.css";
import BurgerGrilling from "../Images";





export default function Gallery() {
  return (
    <div className="Gallery-header">
      <h4 id="Dancing-script">
        <mark class="Specific-text">Image</mark>
      </h4>
      <h3>Gallery</h3>
      <Parallax className="BurgerGrilling" bgImage={BurgerGrilling}></Parallax>

    </div>
  );
}
