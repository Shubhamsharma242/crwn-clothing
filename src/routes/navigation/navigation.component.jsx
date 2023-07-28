import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.slector";
import {selectIsCartOpen} from '../../store/cart/cart.selector'
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";
import {
  LogoContainer,
  NavLinkContainer,
  NavLinks,
  NavigationContainer,
} from "./navigation.style.jsx";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const  isCartOpen  = useSelector(selectIsCartOpen)
  // console.log(isCartOpen);
  const handleSignOut = async () => {
    await SignOutUser();
  };
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinkContainer>
          <NavLinks to="/shop">Shop</NavLinks>
          {currentUser ? (
            <NavLinks as="span" onClick={handleSignOut} to="/auth">
              Sign-Out
            </NavLinks>
          ) : (
            <NavLinks to="/auth">Sign-In</NavLinks>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};          

export default Navigation;
