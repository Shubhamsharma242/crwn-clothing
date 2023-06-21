import { useState } from "react";

import { SignUpContainer } from "./sign-up-form.style.jsx";
import Button, { Button_Type_Classes } from "../button/button.component";
import {
  createAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";
import FormInput from "../form-input/form-input.component.jsx";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  // console.log(formFields);

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
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    try {
      const { user } = await createAuthWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      console.log(user);

      resetFormFeild();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("can not create user , already exist");
      } else {
        console.log("user creation encounterd an error", error.message);
      }
    }
  };
  return (
    <SignUpContainer>
      <h2>Don't have an account</h2>
      <span>sign up with your email and password</span>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button
          type="submit"
          name="button"
          buttonType={Button_Type_Classes.base}
        >
          sign-up
        </Button>
      </form>
    </SignUpContainer>
  );
};
export default SignUpForm;
