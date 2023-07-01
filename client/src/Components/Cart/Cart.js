import React, { useEffect, useState } from "react";
import { CircularProgress, Divider } from "@mui/material";
import "./cart.css";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Right from "./Right";

const Cart = () => {
  const [cartdata, setCartdata] = useState("");
  // console.log(cartdata[8]);

  const getdatabuy = async () => {
    const res = await fetch("/userdata", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const reply = await res.json();

    if (res.status !== 201) {
      console.log("error", res);
    } else {
      setCartdata(reply.carts);
    }
  };

  useEffect(() => {
    getdatabuy();
  }, []);

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
                      <img src={e.cart.detailUrl} alt="imgitem" />
                      <div className="item_details">
                        <h4>{e.cart.title.longTitle}</h4>
                        <h4>{e.cart.title.shortTitle}</h4>
                        <h4 className="diffrentprice">
                          ₹{e.cart.price.cost}.00
                        </h4>
                        <p className="unusuall">
                          Usually dispatched in 8 days.
                        </p>
                        <p>Eligible for FREE Shipping</p>
                        <img
                          src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                          alt="logo"
                        />
                        <Option deleteData={e.cart.id} get={getdatabuy} />
                      </div>
                      <h3 className="item_price">₹{e.cart.price.cost}.00</h3>
                    </div>
                    <Divider />
                  </>
                );
              })}

              <Subtotal item={cartdata} />
            </div>
            <Right item={cartdata} />
          </div>
        </div>
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

export default Cart;
