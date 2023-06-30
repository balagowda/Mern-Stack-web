import React, { useContext } from "react";
import "./sidebar.css";
import { Avatar, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { LoginContext } from "../Context/Context";

const Sidebar = ({ userlogOut ,sideBarClose}) => {

    const { account, setAccount } = useContext(LoginContext);


  return (
    <div className="sideheader">
      <div className="side_nav">
        {account ? (
          <Avatar className="avtar2" title={account.fname.toUpperCase()}>
            {account.fname[0].toUpperCase()}
          </Avatar>
        ) : (
          <Avatar className="avtar" />
        )}
        {account ? <h3>Hello, {account.fname.toUpperCase()}</h3> : <h6 style={{color:'white'}}>Login</h6>}
      </div>
      <div className="nav_btn" onClick={() => sideBarClose()}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Shop By Category</NavLink>
        <Divider style={{ width: "100%", marginLeft: -20 }} />
        <NavLink to="/" style={{ marginTop: 10 }}>
          Today's Deal
        </NavLink>
        {account ? (
          <NavLink to="/cart">Your Order</NavLink>
        ) : (
          <NavLink to="/login">Your Order</NavLink>
        )}
        <Divider style={{ width: "100%", marginLeft: -20 }} />
        <div className="flag">
          <NavLink to="" style={{ marginTop: 14 }}>
            Settings
          </NavLink>
          <img
            src={"https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png"}
            alt="india flag"
            style={{ width: 35, marginLeft: 10 }}
          />
        </div>

        {account ? (
          <div className="flag">
            <LogoutIcon style={{ fontSize: 20, marginRight: 4 }} />
            <h5
              onClick={() => userlogOut()}
              style={{ cursor: "pointer", fontWeight: 500 }}
            >
              Log Out
            </h5>
          </div>
        ) : (
          <NavLink to="/login">Sign in</NavLink>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
