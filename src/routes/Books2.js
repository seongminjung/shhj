import React from "react";
import LeftArrow from "components/LeftArrow";
import RightArrow from "components/RightArrow";
import "css/books.css";
import background_gray from "img/picture/background_gray.png";
import bookimg from "img/picture/book_transparent.png";

const Books1 = () => {
  return (
    <div className="container">
      <LeftArrow to="/books1" />
      <RightArrow to="/about" />
      <img
        src={background_gray}
        alt="background"
        className="backgroundimg_full"
      />
      <img src={bookimg} alt="bookimg" className="b-bookimg" />
      <p className="b-title">Books</p>
      <p className="b-subtitle">고묘고종록</p>
      <div className="b-flex">
        <div className="b-left"></div>
        <div className="b-right">
          <p className="b-sectiontitle">
            2023.04 ⎾고묘고종록古庙敲钟录⏌ 소개글
          </p>
          <p className="b-sectionbody">
            종아를 비롯한 몇 향촌 사람들이 향촌의 발전을 위해서 선생님을 찾아 성
            안으로 들어가니, 서양문물이 들어와서 중국적인 것은 사라져가고 외세의
            문물이 넘쳐나는 현실을 마주하게 됩니다. 그리고 사범학교를 찾아가
            향촌에 오실 주周선생님을 만나게 됩니다. 종아와 함께 향촌에 온 주
            선생님은 옛 절과 향촌을 점차 바꾸어 냅니다. 이들은 향촌 안의 교육
            체계, 군사 체계를 정립하며 향촌 사람들의 생활에 변화를 이끕니다.
            <br />
            당시의 시대상황은 1932년 일본제국의 침략기였으며, 국민당과 공산당의
            군사적 충돌이 빈번한 시기였습니다. 이런 사회상황에서 중국 향촌에서
            이루어지는 군사교육, 노동자교육, 유아교육의 내용이 생생하게 그려져
            있습니다. 이 소설은 비단 작품 안에 머물지 않았으며, 타오싱즈가
            1932년 10월에 상해에서 실시된 ‘산해공학단’을 통하여 실천됩니다. 작
            중 ‘큰 제자’와 ‘어린 제자’로 표현된 ‘소선생제’는 1945년까지 전 중국
            23성시省市에서 채택되는 유력한 교육보급제도가 되었습니다.
            <br />
            역자 강유진, 임채현, 임형택은 약 2년간 《고묘고종록古庙敲钟录》을
            번역해 2023년 3월에 출판하였습니다. 본문은 중한 대역으로 구성되어
            있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Books1;
