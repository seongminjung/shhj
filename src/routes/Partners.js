import React, { useEffect, useState } from "react";
import { dbService } from "fb_info";
import "css/partners.css";
import background_gray from "img/picture/background_gray.png";
import LeftArrow from "components/LeftArrow";
import PartnerTile from "components/PartnerTile";

const Partners = () => {
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    dbService.collection("partners").onSnapshot((snapshot) => {
      const partnersArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setPartners(partnersArray.slice(0).reverse());
      console.log(partnersArray);
    });
  }, []);
  return (
    <div className="container">
      <LeftArrow to="/contact" />
      <img
        src={background_gray}
        alt="background"
        className="backgroundimg_full"
      />
      <p className="title">Partners</p>
      <div className="a2-result__grid">
        {partners.length !== 0 &&
          partners.map((partner) => (
            <PartnerTile partner={partner} key={partner.createdAt} />
          ))}
      </div>
    </div>
  );
};

export default Partners;
