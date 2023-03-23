import React from "react";
import { Link } from "react-router-dom";
import "css/navigation.css";
import logo from "img/logo/logo_black.png";
import bookmark_dot from "img/asset/bookmark_dot.png";
import kor_ver from "img/asset/kor_ver.png";

const Navigation = () => {
  return (
    <div className="n-wrapper">
      <Link to="/">
        <img src={logo} alt="logo" className="n-logo" />
      </Link>
      <div>
        <img src={kor_ver} alt="kor_ver" className="n-language" />
      </div>
      <img src={bookmark_dot} alt="bookmark_dot" className="n-bookmark" />
    </div>
  );
};

export default Navigation;
