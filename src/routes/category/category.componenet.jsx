import { useContext, useState, useEffect, Fragment } from "react";

import { CategoriesContext } from "../../contexts/Categories.context";
import { useParams } from "react-router-dom";
import ProductCard from "../../component/product-card/product-card.component";
import {Title,CategoryContainer} from  "./category.style.jsx";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
