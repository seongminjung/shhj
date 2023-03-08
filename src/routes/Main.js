import React from "react";
import Navigation from "components/Navigation";
import "css/main.css";

const Main = () => {
  return (
    <div className="container-fluid p1-relative">
      <div className="container">
        <Navigation />
        <div className="p1-wrapper">
          <div className="p1-hero">
            <p className="p1-hero__txt">
              창업에 열망이 있는 모든 연세대학생들에게
              <br />
              <span>미래</span>를 열어주는 벤처창업동아리
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
