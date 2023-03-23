import React from "react";
import "css/main.css";
import bookimg from "img/picture/background_with_book.png";
import Social from "components/Social";

const Main = () => {
  return (
    <div className="container">
      <Social />
      <img src={bookimg} alt="book" className="backgroundimg_full" />
      <div className="m-flex">
        <div className="m-left"></div>
        <div className="m-right">
          <p className="m-date">2023.02</p>
          <div>
            <p className="m-title">행복을 찾아서 가는 길</p>
            <p className="m-body">
              이번 [행복을 찾아서 가는 길]은 행복을 위해서 내린 그동안의 결정이
              과연 좋은 결과를 가져다주었는지에 대한 생각으로 이번 [행복을
              찾아서 가는 길]은 행복을 위해서 내린 그동안의 결정이 과연 좋은
              결과를 가져다주었는지에 대한 생각으로....
            </p>
            <p className="m-footer">⎾책을 펴내며: 산사의 미학⏌</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
