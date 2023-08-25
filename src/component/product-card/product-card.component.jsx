import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button, { Button_Type_Classes } from "../button/button.component";
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.style.jsx";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { price, name, imageUrl } = product;

  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
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
