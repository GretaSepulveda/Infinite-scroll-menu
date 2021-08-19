import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

export default function ButtonAppBar() {
  return (
    <div className="Nav-container">
      <div className="Navbar">
        <Link to="About-us" smooth={true} duration={1000} id="link">
          About Us
        </Link>

        <Link to="Menu" smooth={true} duration={1000} id="link">
          Menu
        </Link>
        <Link to="Gallery" smooth={true} duration={1000} id="link">
          Gallery
        </Link>
        {/* <Link id="link">News</Link> */}
        <Link to="FindUs" smooth={true} duration={1000} id="link">
          Find Us
        </Link>
        <Link id="link">Reservation</Link>
      </div>
    </div>
  );
}
