import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
const [enteredNumber, setEnteredNumber] = useState("");

function numberInputHandler(enteredText) {
 setEnteredNumber(enteredText);
}

function confirmInputHandler() {
  const choosenNumber = parseInt(enteredNumber);
  if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
    return;
  }
}

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.btnContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#300319",
    borderRadius: 8,
    elevation: 4, // Android only shadow
    shadowColor: "black", // iOS only shadow
    shadowOffset: { width: 0, height: 2 }, // iOS only shadow
    shadowRadius: 6, // iOS only shadow
    shadowOpacity: 0.25, // iOS only shadow
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1,
  },
});
