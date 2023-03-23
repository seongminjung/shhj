import React from "react";
import { Link } from "react-router-dom";
import "css/navigation.css";
import logo from "img/logo/logo_black.png";
import bookmark_dot from "img/asset/bookmark_dot.png";

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
      <img src={bookmark_dot} alt={"bookmark_dot"} className="n-bookmark" />
    </div>
  );
};

export default Navigation;
