import React from "react";
import "css/books.css";
import bookimg from "img/pictures/bookimg.png";

const Books = () => {
  return (
    <div className="container-fluid">
      <div className="b-flex">
        <img src={bookimg} alt="book" className="b-img" />
        <p className="b--title">Apply</p>
      </div>
    </div>
  );
};

export default Books;
