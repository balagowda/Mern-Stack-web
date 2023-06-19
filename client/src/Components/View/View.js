import React, { useState } from "react";
import { Divider } from "@mui/material";
import { useParams } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";
import './view.css';

const View = () => {
  const [inddata, setIndedata] = useState("");
  const { id } = useParams("");

  const addtocart = async (id) => {
    console.log(id);
  };

  return (
    <div className="view_section">
      {/* {inddata && Object.keys(inddata).length && ( */}
        <div className="view_container">
          <div className="left_view">
            <img src='https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70' alt="view" />
            <div className="view_btn">
              <button
                className="view_btn1"
                onClick={() => addtocart(5252)}
              >
                Add to cart
              </button>
              <button className="view_btn2">Buy Now</button>
            </div>
          </div>
          <div className="right_view">
            <h3>blabla</h3>
            <h4>blabla</h4>
            <Divider />
            <p className="mrp">
              M.R.P. : <del>₹200</del>
            </p>
            <p>
              Deal of the Day :{" "}
              <span style={{ color: "#B12704" }}>₹200.00</span>
            </p>
            <p>
              You save :{" "}
              <span style={{ color: "#B12704" }}>
                {" "}
                ₹50 (
                60){" "}
              </span>
            </p>

            <div className="discount_box">
              <h5>
                Discount :{" "}
                <span style={{ color: "#111" }}>50</span>{" "}
              </h5>
              <h4>
                FREE Delivery :{" "}
                <span style={{ color: "#111", fontWeight: "600" }}>
                  Oct 8 - 21
                </span>{" "}
                Details
              </h4>
              <p style={{ color: "#111" }}>
                Fastest delivery:{" "}
                <span style={{ color: "#111", fontWeight: "600" }}>
                  {" "}
                  Tomorrow 11AM
                </span>
              </p>
            </div>
            <p className="description">
              About the Iteam :{" "}
              <span
                style={{
                  color: "#565959",
                  fontSize: "14px",
                  fontWeight: "500",
                  letterSpacing: "0.4px",
                }}
              >
                15
              </span>
            </p>
          </div>
        </div>
      {/* )} */}

      {/* {!inddata ? (
        <div className="circle">
          <CircularProgress />
          <h2> Loading....</h2>
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default View;
