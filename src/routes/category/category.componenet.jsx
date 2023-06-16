import { useContext, useState, useEffect, Fragment } from "react";

import { CategoriesContext } from "../../contexts/Categories.context";
import { useParams } from "react-router-dom";
import ProductCard from "../../component/product-card/product-card.component";
import "./category.style.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2>{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => {
            console.log(product);
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </Fragment>
  );
};

export default Category;
