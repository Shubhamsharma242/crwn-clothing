import "./dierectory-item.style.scss";
import React from "react";

const DirectoryItem = ({ category: { tittle, imageUrl } }) => {
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <h2>{tittle}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
