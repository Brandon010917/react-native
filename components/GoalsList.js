import { FlatList, StyleSheet, Text, View } from "react-native";
import GoalItem from "./GoalItem";

const GoalsList = ({ deleteGoalHandler, goals }) => {
  return (
    <View style={styles.goalsContainer}>
      <Text style={styles.goalsTitle}>List of goals...</Text>
      <FlatList
        data={goals}
        renderItem={({ item }) => (
          <GoalItem
            id={item.id}
            goal={item.text}
            deleteGoalHandler={deleteGoalHandler}
          />
        )}
        alwaysBounceVertical={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 4,
    gap: 8,
    marginTop: 16
  },
  goalsTitle: {
    fontSize: 32,
    fontWeight: 500,
    color: '#fff'
  },
});

export default GoalsList;
