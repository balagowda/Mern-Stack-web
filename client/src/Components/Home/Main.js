import React from "react";
import Banner from "./Banner";
import "./main.css";
import Slide from "./Slide";
import { Divider } from "@mui/material";

const Main = () => {
  return (
    <>
      <div className="home_section">
        <div className="banner_part">
          <Banner />
        </div>

        <div className="slide_part">
          <div className="left_slide">
            <Slide title="Deal Of The Day" />
          </div>
          <div className="right_slide">
            <h4>Festival latest launches</h4>
            <img
              src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
              alt=""
            />
            <a href=" #">see more</a>
          </div>
        </div>

        <Slide title="Today's Deal" />

        <div className="center_img">
          <img
            src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
            alt=""
          />
        </div>

        <Slide title="Best Seller" />
        <Slide title="Upto 80% off" />
      </div>

      <Divider />
    </>
  );
};

export default Main;
