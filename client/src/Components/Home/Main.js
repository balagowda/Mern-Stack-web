import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import "./main.css";
import Slide from "./Slide";
import { CircularProgress, Divider } from "@mui/material";
import { getProductsAction } from "../redux/actions/Action";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const { products } = useSelector((state) => state.getproductsdata);
  // console.log(products);

  const [data, setData] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
    setData(true);
  }, [dispatch]);

  return (
    <>
      {data ? (
        <>
          <div className="home_section">
            <div className="banner_part">
              <Banner />
            </div>

            <div className="slide_part">
              <div className="left_slide">
                <Slide title="Deal Of The Day" products={products} />
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

            <Slide title="Today's Deal" products={products} />

            <div className="center_img">
              <img
                src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
                alt=""
              />
            </div>

            <Slide title="Best Seller" products={products} />
            <Slide title="Upto 80% off" products={products} />
          </div>

          <Divider />
        </>
      ) : (
        <div className="fullBody">
          <div className="circle">
            <CircularProgress />
            <h2> Loading....</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
