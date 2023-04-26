import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "css/arrows.css";

const LeftArrow = ({ to }) => {
  return (
    <Link className="la-wrapper" to={to}>
      <p>
        <FontAwesomeIcon icon="angles-left" />
      </p>
    </Link>
  );
};

export default LeftArrow;
