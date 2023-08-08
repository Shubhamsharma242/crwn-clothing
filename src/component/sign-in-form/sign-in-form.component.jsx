import { useState } from "react";
import { SignInContainer, ButtonsContainer } from "./sign-in-form.style.jsx";
import Button, { Button_Type_Classes } from "../button/button.component";
import FormInput from "../form-input/form-input.component.jsx";
import { useDispatch } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action.js";
const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFeild = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));

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
