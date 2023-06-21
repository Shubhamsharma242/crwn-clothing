import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contetxt";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.style";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOPen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainer onClick={toggleIsCartOPen}>
      <ShoppingIcon className="shoping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
