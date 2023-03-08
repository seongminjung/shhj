import React from "react";
import { Link } from "react-router-dom";
import "css/navigation.css";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav-link">
        <Link to="/">
          <div className="nav-link__item">
            <p>Main</p>
          </div>
        </Link>
        <Link to="/books">
          <div className="nav-link__item">
            <p>Books</p>
          </div>
        </Link>
        <Link to="/about">
          <div className="nav-link__item">
            <p>About Us</p>
          </div>
        </Link>
        <Link to="/contact">
          <div className="nav-link__item">
            <p>Contact</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
