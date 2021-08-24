import React from "react";
import '../node_modules/react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'BurgerGrilling',
      thumbnail: '',
    },
    {
      original: '',
      thumbnail: '',
    },
    {
      original: '',
      thumbnail: '',
    }
  ];

class ImageSliderComponent extends React.Component {

  render() {
    return (
        <div className="wrapper">
            <ImageGallery items={images} />
        </div>
    );
  }
}
export default ImageSliderComponent;