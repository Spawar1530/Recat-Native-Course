import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [open, setOpen] = useState(false);

  const buttonHandler = (userInput) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: userInput, id: Math.random().toString() },
    ]);
    endGoalHandler();
  };

  const deleteHandler = (id) => {
    console.log(goals);
    console.log(id);
    setGoals((goals) => {
      return goals.filter((item) => item.id !== id);
    });
  };

  function startAddGoalHandler() {
    setOpen(true);
  }

  function endGoalHandler() {
    setOpen(false);
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        endGoalHandler={endGoalHandler}
        visible={open}
        buttonHandler={buttonHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem delteHandler={deleteHandler} itemData={itemData} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,

  },
  goalsContainer: {
    flex: 4,
  },
});
