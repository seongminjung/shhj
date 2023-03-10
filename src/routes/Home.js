import React from "react";
import { Link } from "react-router-dom";
import Navigation from "components/Navigation";
import "css/home.css";

const Home = () => {
  return (
    <div className="container-fluid">
      <Navigation />
      <div className="h-social">
        <p>youtube</p>
        <p>blog</p>
      </div>
      <div className="h-flex">
        <div className="h-links">
          <Link to="/main">
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
          <p className="h-copyright">
            COPYRIGHT XINGZHI BOOKS AL RIGHT RESERVED
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
