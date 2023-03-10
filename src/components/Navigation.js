import React from "react";
import "css/navigation.css";
import logo from "img/pictures/logo.png";

const Navigation = () => {
  return (
    <div className="n-wrapper">
      <img src={logo} alt="logo" className="n-logo" />
    </div>
  );
};

export default Navigation;
