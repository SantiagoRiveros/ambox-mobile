import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, StepOne, StepTwo, StepThree } from "./Views";

const Stack = createNativeStackNavigator();

import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="StepOne" component={StepOne} />
        <Stack.Screen name="StepTwo" component={StepTwo} />
        <Stack.Screen name="StepThree" component={StepThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
