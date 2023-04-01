import React, { useState } from "react";
import { Link } from "react-router-dom";
import "css/navigation.css";
import logo from "img/logo/logo_black.png";
import bookmark_dot from "img/asset/bookmark_dot.png";
import kor_ver from "img/asset/kor_ver.png";
import chn_ver from "img/asset/chn_ver.png";

const Navigation = () => {
  const [lan, setLen] = useState(kor_ver);
  const toggleLanguage = () => {
    if (lan === kor_ver) {
      setLen(chn_ver);
    } else {
      setLen(kor_ver);
    }
  };
  return (
    <div className="n-wrapper">
      <Link to="/main">
        <img src={logo} alt="logo" className="n-logo" />
      </Link>
      <div>
        <img
          src={lan}
          alt="language"
          className="n-language"
          onClick={toggleLanguage}
        />
      </div>
      <Link to="/">
        <img src={bookmark_dot} alt="bookmark_dot" className="n-bookmark" />
      </Link>
    </div>
  );
};

export default Navigation;
