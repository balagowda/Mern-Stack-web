import React from "react";
import "./UnderNav.css";
import MenuIcon from '@mui/icons-material/Menu';

const UnderNav = () => {
  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          <p id="first-child">
            <MenuIcon/> All
          </p>
          <p>Best Sellers</p>
          <p>Fashion</p>
          <p>Electronics</p>
          <p>Prime</p>
          <p>Today's Deals</p>
          <p>Customer Service</p>
        </div>
        <div className="right_data">
          <p>Shop great deals now</p>
        </div>
      </div>
    </div>
  );
};

export default UnderNav;
