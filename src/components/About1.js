import React from "react";
import "css/about1.css";
import ceoimage from "img/picture/ceoimage.png";

const About1 = () => {
  return (
    <div className="container">
      <div className="a1-flex">
        <div className="a1-left">
          <p className="a1-title">About Us</p>
          <p className="a1-subtitle">인사말</p>
          <img src={ceoimage} alt={"ceo"} className="a1-img" />
        </div>
        <div className="a1-right">
          <p className="a1-sectiontitle">
            도서출판 선행후지는 한국과 중국의 보다 발전적인 우호 관계를 위해,
            타오싱즈 교육사상과 관련된 서적을 출판해 나갈 것입니다.
          </p>
          <p className="a1-sectionbody">
            중국의 교육사상가 타오싱즈의 교육사상을 전문적으로, 또 가장 정확하게
            한국 사회에 전달하기 위해서 도서출판 선행후지를 설립하게 되었습니다.
            <br />
            타오싱즈는 2023년 현재 중국에서 공자의 반열에서 존경되고 있는
            사상가이자, 전 중국 20여개 성에서 연구 실험되고 있는 교육사상의
            창시자입니다. 옆 나라 일본은 1935년부터 타오싱즈의 번역서가 출판되기
            시작하였으며, 평생을 타오싱즈 연구에 매진했던 사이토
            아키오斋藤秋男가 남긴 "타오싱즈는 중국에만 속하는 사람이 아니라,
            또한 전 세계에 속하는
            사람이다陶行知不仅是属于中国的，也是属于全世界的" 이 한마디는 현재
            중국에서 타오싱즈의 가치를 대변하는 명언이 되었습니다. 그리고 이런
            원활한 학술 활동은 과거의 역사를 넘어 새로운 중 · 일 관계를 다져
            나가는 바탕이 되고 있습니다.
            <br />
            우리 한국과 중국의 보다 발전적인 우호 관계를 위해, 도서출판
            선행후지는 타오싱즈 교육사상과 관련된 서적을 출판해 나갈 것입니다.
            이러한 연구 번역, 그리고 출판 활동이 한국과 중국 서로가 서로를 보다
            더욱 잘 이해하게 되고, 그럼으로써 화합하게 되는 작업이 되기를
            바랍니다. 감사합니다.
          </p>
          <p className="a1-sectionfooter">타오싱즈 중한우호대사</p>
          <p className="a1-sectionfooter">
            도서출판 선행후지 대표 <span>임형택</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About1;
