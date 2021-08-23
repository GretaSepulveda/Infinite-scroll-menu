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
