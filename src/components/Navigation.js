import React from "react";
import "css/navigation.css";
import logo from "img/pictures/logo.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="n-wrapper">
      <Link to="/">
        <img src={logo} alt="logo" className="n-logo" />
      </Link>
      <div className="n-language">
        <p>kor</p>
        <p>chn</p>
      </div>
    </div>
  );
};

export default Navigation;
