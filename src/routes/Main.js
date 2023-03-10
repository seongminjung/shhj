import React from "react";
import "css/main.css";
import bookimg from "img/pictures/bookimg.png";

const Main = () => {
  return (
    <div className="container-fluid">
      <div className="m-flex">
        <img src={bookimg} alt="book" className="m-img" />
        <p className="m--title">Apply</p>
      </div>
    </div>
  );
};

export default Main;
