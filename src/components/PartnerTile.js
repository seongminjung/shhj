import React from "react";
import "css/tile.css";
import defaultCompany from "img/picture/defaultCompany.jpg";

const PartnerTile = ({ partner }) => {
  return (
    <a href={partner.url} target="_blank" rel="noreferrer">
      <div className="a2-result__award" key={partner.createdAt}>
        <div className="a2-result__logo-background">
          <img
            className="a2-result__logo"
            src={partner.imgUrl ? partner.imgUrl : defaultCompany}
            alt="defaultCompany"
          />
        </div>
        <div className="a2-result__text-background">
          <div className="a2-result__award-bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="7"
              viewBox="0 0 23 7"
            >
              <rect
                id="사각형_257"
                data-name="사각형 257"
                width="23"
                height="7"
                fill="#d3d3d3"
              />
            </svg>
          </div>
          <p className="a2-result__award-name">{partner.name}</p>
          <p className="a2-result__award-detail">{partner.description}</p>
        </div>
      </div>
    </a>
  );
};

export default PartnerTile;
