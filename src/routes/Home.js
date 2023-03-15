import React from "react";
import { Link } from "react-router-dom";
import "css/home.css";
import youtube from "img/asset/youtube.png";
import blog from "img/asset/blog.png";

const Home = () => {
  return (
    <div className="container">
      <div className="h-social">
        <img src={youtube} alt={youtube} />
        <img src={blog} alt={blog} />
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
