import React from "react";
import "css/books.css";
import bookimg from "img/picture/book_transparent.png";

const Books = () => {
  return (
    <div className="container">
      <p className="b-title">Books</p>
      <p className="b-subtitle">고묘고종록</p>
      <div className="b-flex">
        <div className="b-left">
          <img src={bookimg} alt="bookimg" />
        </div>
        <div className="b-right">
          <p className="b-sectiontitle">2023.02 고묘고종록</p>
          <p className="b-sectionbody">
            책 소개: 책을 만드는 일이 어렵다고 합니다. 뜻을 갖고 시작하기도
            어렵지만 이를 지켜나가기는 더 어려운 일입니다. 인쇄매체가 갖는
            특징이기도 하지만 출판은 시대를 대변하는 지성의 외침이요, 문화수준을
            드러내는 지표이며, 세상을 바라보는 ‘창(窓)’이기도 합니다. 출판에
            ‘격(格)’이 있다는 말이지요. 그래서 책을 만드는 데 있어 가장 어려운
            일은 대장정과도 같은 출판의 도정에서 ‘격(格)’을 잃지 않는 것이라고
            합니다. 요약: 나남이 이렇게 어렵기만 한, 길 없는 길을 걷겠노라
            다짐하고 출발한 지 어느 덧 스물여섯 해를 넘기고 있습니다. 그 동안
            2천 권이 넘는 책을 만들었습니다. 이 책 속에서 내가 가지 못한 길을
            가는 사람들의 땀 냄새에 취하면서, 사람다운 사람을 만들고, 책다운
            책을 만들겠다는 자기암시로 어려움을 견뎌왔고 앞으로도 그러할
            것입니다. 그러나 출판이 가슴 뿌듯하고 기쁨 넘치는 길이기도 함을
            일깨워주는 아름다운 사람들이 있습니다. 바로 나남의 많은 저자들과
            나남의 책으로 공부하고 나남의 책을 사랑하는 수많은 독자들입니다.
            저자와 독자, 이들을 이어주는 책, 책을 만드는 나남. ‘나와 남, 나와
            세계, 아(我)와 비아(非我)’의 창조적 조화를 실현하는 것, 이것이
            나남이 걸어왔고 또 걸어가야 할 길입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Books;
