import React, { useState } from "react";
import "css/partners.css";
import background_gray from "img/picture/background_gray.png";
import LeftArrow from "components/LeftArrow";

const Partners = () => {
  const [partners, setPartners] = useState(["sdsdf"]);
  return (
    <div className="container">
      <LeftArrow to="/contact" />
      <img
        src={background_gray}
        alt="background"
        className="backgroundimg_full"
      />
      <p className="title">Partners</p>
      <div>
        {partners.map((partner) => (
          <p>{partner}</p>
        ))}
      </div>
    </div>
  );
};

export default Partners;
