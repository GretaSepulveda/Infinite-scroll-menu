import React from "react";
import Gallery from 'react-grid-gallery';


const IMAGES =
[{
        src: "Burgergrilling.jpeg",
        thumbnail: "Burgergriling.jpeg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "Burger time"
},
{
        src: "Chefmenu.png",
        thumbnail: "galleryimage.jpeg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "Pasta.jpeg",
        thumbnail: "Pasta.jpeg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]

render(
        <Gallery images={IMAGES}/>,
        document.getElementById('example-0')
);



export default function Gallery() {
  return (
    <div>
      <h2>Gallery placeholder</h2>
    </div>
  );
}
