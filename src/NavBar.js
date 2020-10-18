import React from "react";

import "./NavBar.css";
import {Link} from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {auth} from './firebase';
import {useStateValue} from './StateProvider';

function NavBar() {
  const [{user},dispatch] = useStateValue();

  const handleAuth = () => {
    if(user){
      auth.signOut();
    }
  }


  return (
    <div className="header">
      <img className="header-logo" src="" alt="LOGO" />

      <div className="header_search">
        <input
          className="header_searchInput"
          type="text"
          placeholder="Search"
        />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user &&  "/login"}>
          <div onClick={handleAuth} className="header_option">
            <span className="header_optionLineOne">Hello {user ? user?.email.split("@")[0].toUpperCase() : "Guest"}</span>
            <span className="header_optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineTwo">Orders</span>
        </div>

        <div className="header_optionBasket">
          <ShoppingCartIcon />
          <span className="header_optionLineTwo header_basketCount"></span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
