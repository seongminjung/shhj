import React from "react";
import "css/main.css";
import bookimg from "img/pictures/bookimg.png";

const Main = () => {
  return (
    <div className="container-fluid">
      <div className="m-flex">
        <div className="m-left">
          <img src={bookimg} alt="book" className="m-img" />
        </div>
        <div className="m-right">
          <p className="m-date">2023.02</p>
          <p className="m-title">행복을 찾아서 가는 길</p>
          <p className="m-body">
            이번 [행복을 찾아서 가는 길]은 행복을 위해서 내린 그동안의 결정
          </p>
          <p className="m-footer">책을 펴내며: 산사의 미학</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
