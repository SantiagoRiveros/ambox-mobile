import { Text, Button, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Step One"
        onPress={() => navigation.navigate("StepOne")}
      />
    </View>
  );
}
