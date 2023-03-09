import React from "react";
import { Link } from "react-router-dom";
import Navigation from "components/Navigation";
import "css/main.css";

const Main = () => {
  return (
    <div className="container-fluid">
      <Navigation />
      <div className="m-social">
        <p>youtube</p>
        <p>blog</p>
      </div>
      <div className="m-flex">
        <div className="m-links">
          <Link to="/">
            <p>Main</p>
          </Link>
          <Link to="/books">
            <p>Books</p>
          </Link>
          <Link to="/about">
            <p>About Us</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>
        <div>
          <p className="m-copyright">
            COPYRIGHT XINGZHI BOOKS AL RIGHT RESERVED
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
