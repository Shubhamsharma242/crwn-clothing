import { useState } from "react";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.style.jsx";
import Button, { Button_Type_Classes } from "../button/button.component";
import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils.js";
import FormInput from "../form-input/form-input.component.jsx";
const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  // console.log(formFields);

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    // console.log(event.target);
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFeild = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthWithEmailAndPassword(email, password);

      resetFormFeild();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for the email");
          break;
        case "auth/user-not-found":
          alert("no user assosiated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };
  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>sign in with your email and password</span>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit" onClick={handleSubmit}>
            sign-in
          </Button>
          <Button
            type="button"
            buttonType={Button_Type_Classes.google}
            onClick={signInWithGoogle}
          >
            Google sign-in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};
export default SignInForm;
