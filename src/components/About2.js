import React from "react";
import "css/about2.css";

const About2 = () => {
  return (
    <div className="container-fluid">
      <p className="a1-title">About Us</p>
      <p className="a1-subtitle">출판 진행 과정</p>
      <div className="a2-flex">
        <div className="a2-process">
          <p>1. 원고 수급</p>
        </div>
        <div className="a2-process">
          <p>2. 디자인</p>
        </div>
        <div className="a2-process">
          <p>3. 원고 교정교열</p>
        </div>
        <div className="a2-process">
          <p>4. 인쇄 승인</p>
        </div>
        <div className="a2-process">
          <p>5. 인쇄 및 제책</p>
        </div>
        <div className="a2-process">
          <p>6. 출판</p>
        </div>
      </div>
    </div>
  );
};

export default About2;
