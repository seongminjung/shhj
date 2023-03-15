import React from "react";
import "css/social.css";
import youtube from "img/asset/youtube.png";
import blog from "img/asset/blog.png";

const Social = () => {
  return (
    <div className="s-wrapper">
      <img src={youtube} alt={youtube} />
      <img src={blog} alt={blog} />
    </div>
  );
};

export default Social;
