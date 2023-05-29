import React, { useState } from "react";
import LeftArrow from "components/LeftArrow";
import RightArrow from "components/RightArrow";
import "css/books.css";
import background_gray from "img/picture/background_gray.png";
import bookimg from "img/picture/book_transparent.png";

const Books = () => {
  const [curPage, setCurPage] = useState(1);
  const togglePage = () => setCurPage(!curPage);
  const body1 =
    "《고묘고종록古庙敲钟录》은 타오싱즈陶行知가 1932년 5월 21일부터 8월 15일까지 당시 신문인 《신보申报》의 ‘자유담란’에 연재 발표한 글입니다. 그는 《고묘고종록 古庙敲钟录》에 자신의 교육사상을 담아 내었습니다. 이 소설은 1932년 중국을 배경으로 합니다. 1932년은 그 해 3월, 일본이 중국에 만주국을 성립하여 중국침략이 본격화되는 해였으며, 또한 4월엔 윤봉길의사가 상해에서 거사를 일으킨 해이기도 합니다. 이런 시대상황을 중국 국민들은 어떻게 이겨나갈 수 있을지, 어떻게 힘을 모을지, 어떻게 어린 학생들을 교육시켜서 새로운 지도자로 성장시켜 나갈지에 대한 타오싱즈의 대답을 누구나 알기 쉽도록 풀어 적어나간 것이 바로 《고묘고종록古庙敲钟录》입니다. 《고묘고종록古庙敲钟录》이란 “옛 절의 종을 치는 기록”이라는 뜻입니다. 한 향촌에 ‘종아’라는 소년이 하루 3번, 절에서 종을 치며 마을 사람들에게 시간을 알립니다. 종아는 이 세 번의 종을 최대한 정확하게 치는 방법을 궁리하며 해시계, 물시계를 만들며, 별자리를 관측하는 기구까지도 만듭니다. 새벽 4시, 정오 12시, 저녁 8시에 종아가 치는 종이 울리면 향촌 사람은 잠자리에서 일어나고 식사를 하고, 잠자리에 듭니다. 이 종소리를 중심으로 향촌 사람들이 모이기도 하고, 훈련도 받습니다.";
  const body2 =
    "종아를 비롯한 몇 향촌 사람들이 향촌의 발전을 위해서 선생님을 찾아 성 안으로 들어가니, 서양문물이 들어와서 중국적인 것은 사라져가고 외세의 문물이 넘쳐나는 현실을 마주하게 됩니다. 그리고 사범학교를 찾아가 향촌에 오실 주周선생님을 만나게 됩니다. 종아와 함께 향촌에 온 주 선생님은 옛 절과 향촌을 점차 바꾸어 냅니다. 이들은 향촌 안의 교육 체계, 군사 체계를 정립하며 향촌 사람들의 생활에 변화를 이끕니다. 당시의 시대상황은 1932년 일본제국의 침략기였으며, 국민당과 공산당의 군사적 충돌이 빈번한 시기였습니다. 이런 사회상황에서 중국 향촌에서 이루어지는 군사교육, 노동자교육, 유아교육의 내용이 생생하게 그려져 있습니다. 이 소설은 비단 작품 안에 머물지 않았으며, 타오싱즈가 1932년 10월에 상해에서 실시된 ‘산해공학단’을 통하여 실천됩니다. 작 중 ‘큰 제자’와 ‘어린 제자’로 표현된 ‘소선생제’는 1945년까지 전 중국 23성시省市에서 채택되는 유력한 교육보급제도가 되었습니다. 역자 강유진, 임채현, 임형택은 약 2년간 《고묘고종록古庙敲钟录》을 번역해 2023년 3월에 출판하였습니다. 본문은 중한 대역으로 구성되어 있습니다.";
  return (
    <div className="container">
      <LeftArrow to="/main" />
      <RightArrow to="/about" />
      <img
        src={background_gray}
        alt="background"
        className="backgroundimg_full"
      />
      <p className="title">Books</p>
      <p className="subtitle">고묘고종록</p>
      <div className="b-flex">
        <div className="b-left">
          <img src={bookimg} alt="bookimg" className="b-bookimg" />
        </div>
        <div className="b-right">
          <p className="b-sectiontitle">
            2023.04 ⎾고묘고종록古庙敲钟录⏌ 소개글
          </p>
          <div className="b-carousel">
            <p className="b-sectionbody">{curPage ? body1 : body2}</p>
            <p className="b-pagebtn" onClick={togglePage}>
              {curPage ? "Next" : "Prev"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
