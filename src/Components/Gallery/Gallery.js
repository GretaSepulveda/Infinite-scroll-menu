import React from "react";
import Imgix from "react-imgix";
import Burgergrilling from "Images";


const images = [
  "",
  
  
];



export const Gallery = () => (
  <div className="gallery">
    {images.map(image => (
      <Imgix
        sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
        src={buildURL(image)}
        key={image}
        imgixParams={{
          fit: "crop",
          fm: "jpg"
        }}
        width="600"
        height="600"
      />
    ))}
  </div>
);

import Gallery from "react-grid-gallery";
import "./Gallery.css";

const IMAGES = [
  {
    src:
      "https://cdn.pixabay.com/photo/2015/09/05/20/00/dim-sum-924912_960_720.jpg",
    alt: "Dim sum",
    thumbnail:
      "https://cdn.pixabay.com/photo/2015/09/05/20/00/dim-sum-924912_960_720.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Dim sum",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2021/01/27/13/08/chicken-5954894_960_720.jpg",
    alt: "Salt fried chicken",
    thumbnail:
      "https://cdn.pixabay.com/photo/2021/01/27/13/08/chicken-5954894_960_720.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Salt fried chicken",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2021/03/10/05/49/soft-shell-crab-6083580_960_720.jpg",
    alt: "Crab curry",
    thumbnail:
      "https://cdn.pixabay.com/photo/2021/03/10/05/49/soft-shell-crab-6083580_960_720.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "crab curry",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2015/09/05/20/00/dim-sum-924912_960_720.jpg",
    alt: "Dim sum",
    thumbnail:
      "https://cdn.pixabay.com/photo/2015/09/05/20/00/dim-sum-924912_960_720.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    isSelected: true,
    caption: "Dim sum",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2015/09/05/20/00/dim-sum-924912_960_720.jpg",
    alt: "Dim sum",
    thumbnail:
      "https://cdn.pixabay.com/photo/2015/09/05/20/00/dim-sum-924912_960_720.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    isSelected: true,
    caption: "Dim sum",
  },
];

export default function GridGallery() {
  return (
    <div className="Gallery-Parent-Container">
      <div className="Gallery-header" id="Gallery">
        <h4 id="Dancing-script">
          <mark class="Specific-text">Image</mark>
        </h4>
        <h4>Gallery</h4>
        <div className="Gallery-Container">
          <Gallery images={IMAGES} />
        </div>
      </div>
    </div>
  );
}

