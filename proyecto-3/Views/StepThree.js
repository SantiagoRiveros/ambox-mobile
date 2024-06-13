import { Text, Button } from "react-native";

export default function StepThree({ navigation }) {
  return (
    <>
      <Text>This is the Third Step</Text>
      <Button
        title="Next Step"
        onPress={() => {
          navigation.navigate("StepOne");
        }}
      />
    </>
  );
}
