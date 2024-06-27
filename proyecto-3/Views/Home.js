import { Text, Button, View } from "react-native";
import { useEffect } from "react";
import axios from "axios"

//https://pokeapi.co/api/v2/pokemon/pikachu

export default function Home({ navigation }) {

  useEffect(() => {

    /* 
    Las interacciones entre endidades EJ: Frontend-Backend no son instantaneas
    Javascript lee e interpreta una linea detras de otra, esto conlleva que si nosotros queremos
    Algun tipo de dato de la api, este dato no nos sera provisto de manera inmediata
    Pero javascript, si que lee de manera inmediata, no conoce el termino de "esperar"

    Para esto, nacio el async-await, funciona asi:
    Al inicio ed una funcion que va a requerir asincronismo se utiliza async para indicar que
    aplicaremos asincronismo, y el await se usa de manera contextual, segun que dato no sea "inmediato"
    */

    async function loadApi(){
      let apiData = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
      console.log(apiData)
    }
    loadApi()

  }, [])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Step One"
        onPress={() => navigation.navigate("StepOne")}
      />
      <Button title="Go to Register" onPress />
    </View>
  );
}
