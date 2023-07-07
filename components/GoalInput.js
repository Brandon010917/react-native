import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({
  addGoalHandler,
  modalIsVisible,
  toggleModalGoalHandler,
}) => {
  const [goalText, setGoalText] = useState("");

  // Handlers
  const goalInputHandler = (goal) => {
    setGoalText(goal);
  };

  const onAddGoalHandler = () => {
    addGoalHandler(goalText);
    setGoalText("");
  };

  return (
    <Modal style={styles.modal} visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/images/goal.png")} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          value={goalText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={toggleModalGoalHandler} color="#f31282"/>
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              color="#b180f0"
              onPress={onAddGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 16,
    marginTop: 16,
  },
  button: {
    width: 100,
  },
});

export default GoalInput;
