import "./Components/FontAwesomeIcon";
import ImageSliderComponent from "ImageSliderComponent";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Menu from "./Components/Menu/Menu";
import Carousel from "./Components/Carousel/Carousel";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";


function App() {
  return (
    <div className="App">           
      <Navbar />
      <Carousel />
      <About />
      <Menu />
      <Gallery />
      <Footer />
      <ImageSliderComponent />
    </div>
  );
}

export default App;



