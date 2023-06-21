import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./dierectory-item.style";
import React from "react";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { imageurl, tittle, routes } = category;
  const Navigate = useNavigate();

  const navigationHandler = () => {
    Navigate(routes);
  };
  return (
    <DirectoryItemContainer onClick={navigationHandler}>
      <BackgroundImage imageurl={imageurl} />
      <Body>
        <h2>{tittle}</h2>
        <p>SHOP NOW</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
