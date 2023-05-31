import React from "react";
import Carousel from "react-material-ui-carousel";
import './banner.css'

const Banner = () => {
  const Data = [
    "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
    "https://9to5mac.com/wp-content/uploads/sites/6/2022/09/iphone-14-battery-life.jpeg?quality=82&strip=all&w=1600",
    "https://dlcdnrog.asus.com/rog/media/151388231556.webp",
    "https://cpimg.tistatic.com/112119/4/template_photo_1.jpg",
  ];

  return (
    <>
      <Carousel
        className="carasousel"
        autoPlay={true}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={false}
        cycleNavigation={true}
        fullHeightHover={true}
      >
        {Data.map((imag, i) => {
          return (
            <>
              <img src={imag} alt="img" key={i} className="banner_img" />
            </>
          );
        })}
      </Carousel>
    </>
  );
};

export default Banner;
