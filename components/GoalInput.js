import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

export default function GoalInput({ buttonHandler, visible, endGoalHandler }) {
  const [userInput, setUserInput] = useState("");

  const addGoalHandler = () => {
    buttonHandler(userInput);
    setUserInput("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          value={userInput}
          onChangeText={(text) => {
            setUserInput(text);
          }}
          style={styles.textInput}
          placeholder="Your course goal!"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal" color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button onPress={endGoalHandler} title="Cancel" color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:"#e4d0ff",
    width: "100%",
    color:"#120438",
    borderRadius:6,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 8,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
