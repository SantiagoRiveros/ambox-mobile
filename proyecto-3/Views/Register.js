import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import validateEmail from "../Validations/ValidateEmail";
import { validateName, validatePassword } from "../Validations";
import axios from "axios";

export default function Register({ navigation }) {
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    password: "",
    passwordRepeat: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    password: "",
    passwordRepeat: "",
  });

  const handleChange = (event) => {
    setRegister({
      ...register,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegister = () => {
    let errorsDetected = {
      firstName: !register.firstName.trim()
        ? "You must complete first name input."
        : register.firstName.length < 2
        ? "First name need at least 2 characters long."
        : !validateName(register.firstName)
        ? "First name must only contain letters."
        : "",
      lastName: !register.lastName.trim()
        ? "You must complete last name input."
        : register.lastName.length < 2
        ? "Last name need at least 2 characters long"
        : !validateName(register.lastName)
        ? "Last name must only contain letters."
        : "",
      userName: !register.userName.trim()
        ? "You must complete user name input"
        : register.userName.length < 5
        ? "User name need at least 5 characters long"
        : "",
      email: !register.email.trim()
        ? "You must complete email input."
        : !validateEmail(register.email)
        ? "Email must need a valid format"
        : "",
      age: !register.age.trim()
        ? "You must complete age input."
        : +register.age < 18
        ? "Must need to be 18 years old or older."
        : "",
      password: !register.password.trim()
        ? "You must complete password input."
        : register.password.length < 8
        ? "Password must have at least 8 characters long."
        : register.password.length > 32
        ? "Password must have less than 32 characters long."
        : !validatePassword(register.password)
        ? "Password must contain at least 1 Uppercase letter, 1 Lowercase Letter, 1 Number and 1 Special Character."
        : "",
      passwordRepeat: !register.passwordRepeat.trim()
        ? "You must complete password repeat input."
        : register.password !== register.passwordRepeat
        ? "Passwords must match."
        : "",
    };

    const hasErrors = Object.values(errorsDetected).some(
      (error) => error !== ""
    );
    setErrors(errorsDetected);
    return !hasErrors;
  };

  const handleSubmit = () => {
    console.log("ACA");
    if (handleRegister) {
      console.log("ACA");
      navigation.navigate("Home");
    } else {
      return;
    }
  };

  return (
    <View>
      <Text>First Name</Text>
      <TextInput placeholder="Type your first name." onChange={handleChange} />
      {errors.firstName ? <Text>{errors.firstName}</Text> : null}
      <Text>Last Name</Text>
      <TextInput placeholder="Type your last name." onChange={handleChange} />
      {errors.lastName ? <Text>{errors.lastName}</Text> : null}
      <Text>Email</Text>
      <TextInput placeholder="Type your email." onChange={handleChange} />
      {errors.email ? <Text>{errors.email}</Text> : null}
      <Text>Age</Text>
      <TextInput
        placeholder="Type your age."
        keyboardType="numeric"
        onChange={handleChange}
      />
      {errors.age ? <Text>{errors.age}</Text> : null}
      <Text>Password</Text>
      <TextInput
        placeholder="Type your password."
        secureTextEntry={true}
        onChange={handleChange}
      />
      {errors.password ? <Text>{errors.password}</Text> : null}
      <Text>Repeat Password</Text>
      <TextInput
        placeholder="Repeat your password."
        secureTextEntry={true}
        onChange={handleChange}
      />
      {errors.passwordRepeat ? <Text>{errors.passwordRepeat}</Text> : null}
      <Button title="Register" onPress={() => handleSubmit()} />
    </View>
  );
}
