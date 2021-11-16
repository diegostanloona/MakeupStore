import { useState } from "react";

const ImagesCarousel = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImageHandler = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(props.images.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const nextImageHandler = () => {
    if (currentImageIndex === props.images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div className="images_carousel">
      {props.images && (
        <>
          <span onClick={previousImageHandler}>{"<"}</span>

          <img
            key={currentImageIndex}
            src={props.images[currentImageIndex].src}
            alt={props.images[currentImageIndex].alt}
          />

          <span onClick={nextImageHandler}>{">"}</span>
        </>
      )}
    </div>
  );
};

export default ImagesCarousel;
