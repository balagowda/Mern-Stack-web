import React, { useState } from "react";
import { Divider } from "@mui/material";
import "./cart.css";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Right from "./Right";


const Cart = () => {
  const [cartdata, setCartdata] = useState([1]);
  // console.log(cartdata.length);

  const getdatabuy = async () => {
    const res = await fetch("/cartdetails", {
      
    });
  };

  return (
    <>
      {cartdata.length ? (
        <div className="cart_section">
          <div className="cart_container">
            <div className="left_buy">
              <h1>Shopping Cart</h1>
              <p>Select all items</p>
              <span className="leftbuyprice">Price</span>
              <Divider />

              {cartdata.map((e, ind) => {
                return (
                  <>
                    <div className="item_containert" key={ind}>
                      <img src='https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70' alt="imgitem" />
                      <div className="item_details">
                        <h3>fgdfg</h3>
                        <h3>dfgdfg</h3>
                        <h3 className="diffrentprice">₹10.00</h3>
                        <p className="unusuall">
                          Usually dispatched in 8 days.
                        </p>
                        <p>Eligible for FREE Shipping</p>
                        <img
                          src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                          alt="logo"
                        />
                        <Option />
                      </div>
                      <h3 className="item_price">₹1.00</h3>
                    </div>
                    <Divider />
                  </>
                );
              })}

              <Subtotal />
            </div>
            <Right />
          </div>
        </div>
      ) : (
        // <Empty />
        <h1>fdg</h1>
      )}
    </>
  );
};

export default Cart;
