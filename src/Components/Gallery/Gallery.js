import React from "react";
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
      "https://cdn.pixabay.com/photo/2016/08/05/07/15/pizza-1571697_960_720.jpg",
    alt: "Baked potato pizza",
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/08/05/07/15/pizza-1571697_960_720.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    // isSelected: true,
    caption: "Baked potato pizza",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2020/09/13/15/41/steak-5568608_960_720.jpg",
    alt: "Grilled steak",
    thumbnail:
      "https://cdn.pixabay.com/photo/2020/09/13/15/41/steak-5568608_960_720.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    // isSelected: true,
    caption: "Grilled steak",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2015/10/12/15/25/bar-984527_960_720.jpg",
    alt: "Restaurant",
    thumbnail:
      "https://cdn.pixabay.com/photo/2015/10/12/15/25/bar-984527_960_720.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    // isSelected: true,
    caption: "Restaurant",
  },
  // {
  //   src:
  //     "https://cdn.pixabay.com/photo/2018/08/13/13/37/roasted-chicken-3602956_960_720.jpg",
  //   alt: "Roasted chicken",
  //   thumbnail:
  //     "https://cdn.pixabay.com/photo/2018/08/13/13/37/roasted-chicken-3602956_960_720.jpg",
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 212,
  //   caption: "Roasted chicken",
  // },
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
