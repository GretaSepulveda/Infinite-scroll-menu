import React from "react";
// import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";


const images = [
  {
    original: "galleryimage.jpeg", 
    thumbnail: "galleryimage.jpeg",
  },
  {
    original: "Burgergrilling.jpeg",
    thumbnail: "Burgergrilling.jpeg",
  },
  {
    original: "Pasta.jpeg",
    thumbnail: "Pasta",
  },
];

class ImageSliderComponent extends React.Component {
constructor(props) {
    super(props);
    this.myImageRef = React.createRef();
    this.onFullscreen = this.onFullscreen.bind(this);
    this.onPlay = this.onPlay.bind(this);
    this.onPause = this.onPause.bind(this);
    this.onMoveToSlide = this.onMoveToSlide.bind(this);
}

onFullscreen() {
    this.myImageRef.current.fullScreen();
}
onPlay() {
    this.myImageRef.current.play();
}
onPause() {
    this.myImageRef.current.pause();
}
onMoveToSlide() {
    // Index start from 0 so 2 will move to 3rd slide
    this.myImageRef.current.slideToIndex(2);
}

render() {
    return (
<div className="wrapper">
        <ImageGallery items={images} ref={this.myImageRef} />
        <button onClick={this.onFullscreen}>FullScreen</button>
</div>
    );
}
}
export default ImageSliderComponent;
