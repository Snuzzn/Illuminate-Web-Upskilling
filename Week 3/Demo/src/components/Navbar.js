import React from "react";
import logo from "../logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logoContainer">
        <img src={logo} alt="" className="logoIcon" />
        <div>Mediaful</div>
      </div>
      <div className="navItem">Movies</div>
      <div className="navItem">TV Shows</div>
      <div className="navItem">Books</div>
      <div className="loginBtn">
        <div>Login</div>
      </div>
    </div>
  );
}

export default Navbar;
