import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <nav>
          <a href="/Home">Home</a>
          <a href="/Order">Order</a>
          <a href="/Order Review">Order Review</a>
          <a href="/Manage Inventory"> Manage Inventory</a>
          <a href="/Login"> Login</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
