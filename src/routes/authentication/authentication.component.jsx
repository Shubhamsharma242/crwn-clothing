import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from '../../component/button/button.component'

import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <Button buttonType="google" onClick={logGoogleUser}>Sign in with Google popUp</Button>
      <SignUpForm />
    </div>
  );
};
export default Authentication;
