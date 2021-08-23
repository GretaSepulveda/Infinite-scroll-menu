import "./Components/FontAwesomeIcon";
import React, { useState, useEffect } from "react";
// import { css } from "@emotion/css";
import BounceLoader from "react-spinners/BounceLoader";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Menu from "./Components/Menu/Menu";
import Carousel from "./Components/Carousel/Carousel";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
// import Gallery from "./Components/Gallery/Gallery";
import FindUs from "./Components/FindUs/FindUs";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <BounceLoader
          size={130}
          color={"#aca358"}
          loading={loading}
          speedMultiplier={1.5}
        />
      ) : (
        <div>
          <Navbar />
          <Carousel />
          <About />
          <Menu />
          {/* <Gallery /> */}
          <FindUs />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
