import React from "react";
import { Link } from "react-scroll";

export default function HomeButton() {
  return (
    <div>
      <Link to="Navbar" smooth={true} duration={1000} id="link">
        Scroll to top
      </Link>
    </div>
  );
}
