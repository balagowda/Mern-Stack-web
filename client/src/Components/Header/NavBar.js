import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Drawer, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../Context/Context";
import Sidebar from "./Sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const usestyle = makeStyles({
  component: {
    marginTop: 10,
    marginRight: "-50px",
    width: "300px",
    padding: 50,
    height: "300px",
  },
});

const NavBar = () => {
  const { account, setAccount } = useContext(LoginContext);
  // console.log(account);

  //All useState components
  const [sideOpen, setSideOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(false);

  const [text, setText] = useState("");

  const [listOpen, setListOpen] = useState(true);

  const reDirect = useNavigate("");

  //redux state data fetching
  const { products } = useSelector((state) => state.getproductsdata);

  const getText = (item) => {
    setText(item);
    setListOpen(false);
  };

  //styling component
  const classes = usestyle();

  //user data fetching
  const getuserData = async () => {
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
      console.log("Error in fetching user data");
    } else {
      setAccount(reply);
    }
  };

  //logout user
  const logoutUser = async () => {
    const res1 = await fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const reply1 = await res1.json();

    if (!reply1.status === 201) {
      const error = new Error(reply1.error);
      throw error;
    } else {
      setAccount((prevAccount) => ({
        ...prevAccount,
        account: false,
      }));
      reDirect("/");
      toast.success("Logout Successfull", {
        position: "top-center",
      });
    }
  };

  //Sidebar property
  const handelOpen = () => {
    setSideOpen(!sideOpen);
  };

  const handleClose = () => {
    setSideOpen(!sideOpen);
  };

  //avtar toggle dropdown menu
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleShut = () => {
    setAnchorEl(null);
  };

  //useeffect call
  useEffect(() => {
    getuserData();
  }, [account]);

  return (
    <header>
      <nav>
        <div className="left">
          <IconButton className="hamburgur" onClick={handelOpen}>
            <MenuIcon style={{ color: "#fff" }} />
          </IconButton>
          {/* sideBar defination */}
          <Drawer open={sideOpen} onClose={handleClose}>
            <Sidebar userlogOut={logoutUser} sideBarClose={handleClose} />
          </Drawer>

          <div className="navlogo">
            <Link to="/">
              <img
                src={
                  "https://www.thesun.co.uk/wp-content/uploads/2022/02/Amazon-Logo-1024x426-1.png?strip=all&w=960"
                }
                alt="logo"
              />
            </Link>
          </div>
          <div className="nav_searchbar">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search products"
              onChange={(e) => getText(e.target.value)}
            />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>

            {/* Search product filter */}
            {text && (
              <List className="extrasearch" hidden={listOpen}>
                {products
                  .filter((product) =>
                    product.title.longTitle
                      .toLowerCase()
                      .includes(text.toLowerCase())
                  )
                  .map((product) => (
                    <ListItem>
                      <NavLink
                        to={`/viewItem/${product.id}`}
                        onClick={() => setListOpen(true)}
                      >
                        {product.title.longTitle}
                      </NavLink>
                    </ListItem>
                  ))}
              </List>
            )}
          </div>
        </div>

        <div className="right">
          {account ? (
            ""
          ) : (
            <div className="nav_btn">
              <Link to="/login">signin</Link>
            </div>
          )}

          {account ? (
            <NavLink to="/cart">
              <div className="cart_btn">
                <Badge
                  badgeContent={account.carts ? account.carts.length : 0}
                  color="secondary"
                >
                  <ShoppingCartIcon style={{ color: "white" }} />
                </Badge>

                <p>Cart</p>
              </div>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <div className="cart_btn">
                <Badge badgeContent={0} color="secondary">
                  <ShoppingCartIcon style={{ color: "red" }} />
                </Badge>
                <p>Cart</p>
              </div>
            </NavLink>
          )}

          {account ? (
            <Avatar
              className="avtar2"
              title={account.fname ? account.fname.toUpperCase() : ""}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {account.fname ? account.fname[0].toUpperCase() : ""}
            </Avatar>
          ) : (
            <Avatar className="avtar" onClick={handleClick} />
          )}

          <div className="menu_div">
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleShut}
              className={classes.component}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleShut} style={{ margin: 10 }}>
                My account
              </MenuItem>
              {account ? (
                <MenuItem style={{ margin: 10 }} onClick={logoutUser}>
                  <LogoutIcon style={{ fontSize: 16, marginRight: 3 }} /> Logout
                </MenuItem>
              ) : (
                ""
              )}
            </Menu>
          </div>
        </div>
      </nav>
      <ToastContainer />
    </header>
  );
};

export default NavBar;
