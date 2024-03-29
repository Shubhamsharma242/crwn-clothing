import {
  HeaderBlock,
  CheckoutHeader,
  CheckoutContainer,
  Total,
} from "./checkout.style.jsx";
import PaymentForm from '../../component/payment-form/payment.component'
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector.js";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
      <PaymentForm/>
      
    </CheckoutContainer>
  );
};

export default Checkout;
