import { Text, Button, TextInput } from "react-native";
import { useState } from "react";

export default function StepOne({ navigation }) {
  const [state, setState] = useState("");
  const [asado, setAsado] = useState();

  const handleText = (event) => {
    setState(event.target.value);
  };

  return (
    <>
      <Text>This is the First Step</Text>
      <TextInput onChange={handleText} />
      <Button
        title="Next Step"
        disabled={state !== "habilitado"}
        onPress={() => {
          navigation.navigate("StepTwo");
        }}
      />
    </>
  );
}
