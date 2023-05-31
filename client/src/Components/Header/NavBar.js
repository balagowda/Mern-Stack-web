import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import Avatar from '@mui/material/Avatar';

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <img src={"https://www.thesun.co.uk/wp-content/uploads/2022/02/Amazon-Logo-1024x426-1.png?strip=all&w=960"} alt="logo" />
          </div>
          <div className="nav_searchbar">
            <input type="text" name="" id="" />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <a href="">signin</a>
          </div>
          <div className="cart_btn">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon id="icon" />
            </Badge>
            <p>Cart</p>
          </div>
          <Avatar className="avtar" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
