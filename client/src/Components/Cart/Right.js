import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './cart.css';

const Right = ({item}) => {

  const [val, setVal] = useState(false);
  const [cost,setCost] = useState(0);

  function calculateCost() {
    let price = 0;
    item.map((item) => {
      price += item.cart.price.cost
    });
    setCost(price);
  }

  useEffect(()=>{
    calculateCost();
  },[item.length]);

  return (
    <div className="right_buy">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
        alt="rightimg"
      />
      <div className="cost_right">
        <p>
          Your order is eligible for FREE Delivery. <br />
          <span style={{ color: "#565959" }}>
            {" "}
            Select this option at checkout. Details
          </span>
        </p>
        <h3>
          Subtotal ({item.length} items):{" "}
          <span style={{ fontWeight: "700" }}> ₹{cost}.00</span>
        </h3>
        <button className="rightbuy_btn" >
          Proceed to Buy
        </button>
        <div className="emi" onClick={() => setVal(!val)}>
          Emi available
          {!val ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        <span className={val ? "show" : "hide"}>
          {" "}
          Your order qualifies for EMI with valid credit cards (not available on
          purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up).
          Learn more
        </span>
      </div>
    </div>
  );
};

export default Right;
