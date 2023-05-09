import React from "react";
import RightArrow from "components/RightArrow";
import "css/main.css";
import bookimg from "img/picture/background_with_book.png";
// import Social from "components/Social";

const Main = () => {
  return (
    <div className="container">
      <RightArrow to="/books" />
      {/* <Social /> */}
      <img src={bookimg} alt="book" className="backgroundimg_full" />
      <div className="m-flex">
        <div className="m-left"></div>
        <div className="m-right">
          <p className="m-date">2023.04</p>
          <div>
            <p className="m-title">⎾고묘고종록古庙敲钟录⏌</p>
            <p className="m-body">
              《고묘고종록古庙敲钟录》은 타오싱즈陶行知가 1932년 5월 21일부터
              8월 15일까지 당시 신문인 《신보申报》의 ‘자유담란’에 연재 발표한
              글입니다. 그는 《고묘고종록古庙敲钟录》에 자신의 교육사상을 담아
              내었습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
