import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/context.component";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.style.scss";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);
  const handleSignOut = async () => {
    await SignOutUser();
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link " to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <Link className="nav-link " onClick={handleSignOut} to="/auth">
              Sign-Out
            </Link>
          ) : (
            <Link className="nav-link " to="/auth">
              Sign-In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
