import { Divider } from "@mui/material";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
// import {products} from './ProductData';
import "./slide.css";
import { NavLink } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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

const Slide = ({ title, products }) => {
  return (
    <div className="products_section">
      <div className="products_deal">
        <h3>{title}</h3>
        <button className="view_btn">View All</button>
      </div>

      <Divider />

      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        showDots={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((product, i) => {
          return (
            <NavLink to={`/viewItem/${product.id}`} >
              <div className="products_items" kay={i}>
                <div className="product_img">
                  <img src={product.url} alt="item" />
                </div>
                <p className="products_name">{product.title.shortTitle}</p>
                <p className="products_offer">{product.discount}</p>
                <p className="product_explore">{product.tagline}</p>
              </div>
            </NavLink>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slide;
