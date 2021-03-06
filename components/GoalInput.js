import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
const GoalInput = (props) => {
  const [enteredGoals, setEnteredGoals] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoals(enteredText);
  };
  const addGoalHandler = () => {
    props.onGoalAdd(enteredGoals);
    setEnteredGoals("");
  };
  return (
    <Modal visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoals}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color={'red'} onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});
export default GoalInput;
