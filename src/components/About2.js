import React from "react";
import "css/about2.css";
import processes from "img/picture/processes.png";

const About2 = () => {
  return (
    <div className="container-fluid">
      <p className="a2-title">About Us</p>
      <p className="a2-subtitle">출판 진행 과정</p>
      <div className="a2-process">
        <img src={processes} alt="processes" />
      </div>
    </div>
  );
};

export default About2;
