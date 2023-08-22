import {
  HeaderBlock,
  CheckoutHeader,
  CheckoutContainer,
  Total,
} from "./checkout.style.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contetxt";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  // console.log(cartTotal);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description </span>
        </HeaderBlock>
        <HeaderBlock>
          <span> Quantity </span>
        </HeaderBlock>
        <HeaderBlock>
          <span> Price </span>
        </HeaderBlock>
        <HeaderBlock>
          <span> Remove </span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <Total>Total:$ {cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
