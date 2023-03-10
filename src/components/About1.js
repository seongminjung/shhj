import React from "react";
import "css/about1.css";

const About1 = () => {
  return (
    <div className="container-fluid">
      <div className="a1-flex">
        <div className="a1-left">
          <p className="a1-title">About Us</p>
          <p className="a1-subtitle">인사말</p>
        </div>
        <div className="a1-right">
          <p className="a1-sectiontitle">저자와 독자</p>
          <p className="a1-sectionbody">책을 만드는 일이 어렵다고 합니다.</p>
          <p className="a1-sectionfooter">
            도서출판 선행후지 대표 <span>임형택</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About1;
