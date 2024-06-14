import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";

export default function Login({ navigation }) {
  //es el estado del componente
  //    en el primero se guarda en si el valor del estado
  // El segundo, sirve para modificar la informacion del estado
  // login = 3 <- ESTO NO SE PUEDE HACER
  // setLogin(3)
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setLogin({
      ...login, // <- Spread Operator
      [event.target.name]: event.target.value,
      // email: santiagoriverosjasis@gmail.com
    });
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        placeholder="Ingrese su email"
        name="email"
        onChange={handleChange}
      />
      <Text>Contraseña</Text>
      <TextInput
        placeholder="Ingrese su contraseña"
        secureTextEntry={true}
        name="password"
        onChange={handleChange}
      />
      <Button title="Login" />
    </View>
  );
}
