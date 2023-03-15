import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CarouselSlide.scss";

function CarouselSlide() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="text-content">
        <h1>#GOOD4ME</h1>
      </div>
      <Carousel className="container-carousel" responsive={responsive}>
        <div>
          <img src="../../../public/img/background/gril.png" />
        </div>
        <div>
          <img src="../../../public/img/background/gril.png" />
        </div>
        <div>
          <img src="../../../public/img/background/gril.png" />
        </div>
        <div>
          <img src="../../../public/img/background/gril.png" />
        </div>
        <div>
          <img src="../../../public/img/background/gril.png" />
        </div>
        <div>
          <img src="../../../public/img/background/gril.png" />
        </div>
        <div>
          <img src="../../../public/img/background/gril.png" />
        </div>
        <div>
          <img src="../../../public/img/background/gril.png" />
        </div>
        <div>
          <img src="../../../public/img/background/gril.png" />
        </div>
      </Carousel>
    </>
  );
}

export default CarouselSlide;
