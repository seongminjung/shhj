import React from "react";
import "css/books.css";
import bookimg from "img/pictures/bookcover.png";

const Books = () => {
  return (
    <div className="container-fluid">
      <div className="b-flex">
        <div className="b-left">
          <p className="b-title">Books</p>
          <p className="b-subtitle">고묘고종록</p>
          <img src={bookimg} alt="bookimg" />
        </div>
        <div className="b-right">
          <p className="b-sectiontitle">저자와 독자</p>
          <p className="b-sectionbody">책을 만드는 일이 어렵다고 합니다.</p>
          <p className="b-sectionfooter">
            도서출판 선행후지 대표 <span>임형택</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Books;
