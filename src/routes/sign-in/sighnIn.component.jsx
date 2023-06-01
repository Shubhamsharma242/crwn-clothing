import React from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import { getDoc } from "firebase/firestore";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(user);
    // console.log(user.uid);
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log((await getDoc( userDocRef)).data().email)
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};
export default SignIn;
