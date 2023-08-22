import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contetxt";
import Button, { Button_Type_Classes } from "../button/button.component";
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.style.jsx";

const ProductCard = ({ product }) => {
  const { price, name, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <img src={`${imageUrl}`} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={Button_Type_Classes.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
