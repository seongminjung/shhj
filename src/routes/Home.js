import React from "react";
import { Link } from "react-router-dom";
import Social from "components/Social";
import "css/home.css";

const Home = () => {
  return (
    <div className="container">
      <Social />
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
            COPYRIGHT XINGZHI BOOKS ALL RIGHT RESERVED
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
