import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer-Container">
      {/* <div>
        <h5>Recent Posts</h5>
      </div> */}
      <div>
        <h5>Gallery</h5>
      </div>
      <div>
        <h5>Contact Info</h5>
        <p>
          <FontAwesomeIcon icon="location-arrow" color="grey" />
          1402 7th St, El Paso, TX
        </p>
        <p>
          <FontAwesomeIcon icon="phone" color="grey" />
          (915)334-9427
        </p>
        <p>
          <FontAwesomeIcon icon="envelope" color="grey" />
          info@grandrestauranttheme.com
        </p>
        <a href="#home" class="Nav-container"><i class="fa fa-arrow-up w3-margin-right" aria-hidden="true"></i>Click here to go back to the TOP.</a>
      </div>
    </div>
  );
}
