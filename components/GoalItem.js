import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ deleteGoalHandler, goal, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={(e) => {
          deleteGoalHandler(id);
        }}
        android_ripple={{ color: "#210644" }}
      >
        <Text style={styles.goalItemText}>{goal}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    padding: 8,
    color: "#fff",
  },
});

export default GoalItem;
