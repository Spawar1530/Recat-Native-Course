import { StyleSheet, View, Text, Pressable, Modal } from "react-native";

export default function GoalItem({ itemData, delteHandler }) {
  return (
    <Modal>
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "red" }}
        onPress={delteHandler.bind(this, itemData.item.id)}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    margin: 8,
  },
  goalText: {
    color: "white",
    padding: 8,
    textAlign: "center",
  },
});
