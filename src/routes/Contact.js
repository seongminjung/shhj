import React from "react";
import "css/contact.css";
import background_gray from "img/picture/background_gray.png";
import contactimg from "img/picture/contact.png";

const contact = () => {
  return (
    <div className="container">
      <img
        src={background_gray}
        alt="background"
        className="backgroundimg_full"
      />
      <p className="c-title">Contact</p>
      <div className="c-flex">
        <div className="c-left">
          <p>주소 | [10881] 경기도 파주시 회동길 210</p>
          <p>전화 | 031 955 1936, 2560</p>
          <p>팩스 | 031 955 2557</p>
          <p>독자의견 | bookpot@hanmail.net</p>
        </div>
        <div className="c-right">
          <img src={contactimg} alt="contact" />
        </div>
      </div>
    </div>
  );
};

export default contact;
