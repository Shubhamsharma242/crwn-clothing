import React from "react";
import DirectoryItem from "../directory-item/directory-item.component";
import {DirectoryContainer} from "./directory.style.jsx";

const categories = [
  {
    id: 1,
    tittle: "HATS",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    routes: "shop/hats"
  },
  {
    id: 2,
    tittle: "JACKETS",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    routes : "shop/jackets"
  },
  {
    id: 3,
    tittle: "SNEAKERS",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    routes : "shop/sneakers"
  },
  {
    id: 4,
    tittle: "MENS",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    routes : "shop/mens"
  },
  {
    id: 5,
    tittle: "WOMENS",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    routes : "shop/womens"
  },
];

export const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};
