import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalInput from "./components/GoalInput";
import GoalsList from "./components/GoalsList";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // Handlers
  const toggleModalGoalHandler = () => {
    setModalIsVisible(!modalIsVisible);
  };

  const addGoalHandler = (goalText) => {
    if (!goalText.trim()) return;

    setGoals((prevGoals) => [
      ...prevGoals,
      { text: goalText.trim(), id: Math.random().toString() },
    ]);

    toggleModalGoalHandler();
  };

  const deleteGoalHandler = (goalId) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalId));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.button}>
          <Button
            title="Add New Goal"
            color="#a065ec"
            onPress={toggleModalGoalHandler}
          />
        </View>
        <GoalInput
          addGoalHandler={addGoalHandler}
          modalIsVisible={modalIsVisible}
          toggleModalGoalHandler={toggleModalGoalHandler}
        />
        <GoalsList goals={goals} deleteGoalHandler={deleteGoalHandler} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 16,
  },
  button: {
    width: 150,
    alignSelf: "flex-end",
    borderRadius: 6,
    overflow: "hidden",
  },
});
