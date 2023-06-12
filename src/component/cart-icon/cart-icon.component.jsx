import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contetxt";
import "./cart-icon.style.scss";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen,cartCount } = useContext(CartContext);
  const toggleIsCartOPen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOPen}>
      <ShopingIcon className="shoping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
