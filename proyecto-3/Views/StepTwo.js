import { Text, Button } from "react-native";

export default function StepTwo({ navigation }) {
  return (
    <>
      <Text>This is the Second Step</Text>
      <Button
        title="Next Step"
        onPress={() => {
          navigation.navigate("StepThree");
        }}
      />
    </>
  );
}
