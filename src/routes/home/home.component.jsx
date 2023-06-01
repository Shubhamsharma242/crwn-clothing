import "../../categories.style.scss";

import { Directory } from "../../component/directory/directory.component";
const Home = () => {
  const categories = [
    {
      id: 1,
      tittle: "HATS",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      tittle: "JACKETS",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      tittle: "SNEAKERS",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      tittle: "MENS",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
    {
      id: 5,
      tittle: "WOMENS",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
  ];
  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
