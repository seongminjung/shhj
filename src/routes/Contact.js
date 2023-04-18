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
          <p>주소 | [04075] 서울특별시 마포구 와우산로 32, 5층(상수동)</p>
          <p>전화 | 02 6204 6931</p>
          <p>E-mail | taoxingzhi@naver.com</p>
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
