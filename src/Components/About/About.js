import React from "react";
import "./About.css";
import PotStickers from "../Images/PotStickers.jpeg";

export default function About() {
  return (
    <div className="Story-Container">
      <div className="Our-Story">
        <h4>
<<<<<<< HEAD
          Until I discovered our story I was never really interested in anything
        </h4>
        <h5 id="Dancing-script">Our Founder John Phillipe</h5>
=======
          Until I discovered cooking I was never really interested in anything
        </h4>
        <p>Our founder John Phillipe</p>
        <h5 id="Dancing-script">John Phillipe</h5>
>>>>>>> 21266c5f67252d03ff40041daf04d43ea57511c3
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
<<<<<<< HEAD
            Discover
=======
            <mark className="Specific-text">Discover</mark>
>>>>>>> 21266c5f67252d03ff40041daf04d43ea57511c3
          </h4>
          <p>our story</p>
        </div>
      </div>
    </div>
  );
}