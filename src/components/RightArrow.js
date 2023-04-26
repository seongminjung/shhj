import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "css/arrows.css";

const RightArrow = ({ to }) => {
  return (
    <Link className="ra-wrapper" to={to}>
      <p>
        <FontAwesomeIcon icon="angles-right" />
      </p>
    </Link>
  );
};

export default RightArrow;
