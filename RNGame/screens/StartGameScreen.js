import React, { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

const StartGameScreen = ({ onPickNumber }) => {
const [enteredNumber, setEnteredNumber] = useState("");

function numberInputHandler(enteredText) {
 setEnteredNumber(enteredText);
}

function resetInputHandler() {
  setEnteredNumber("");
}

function confirmInputHandler() {
  const choosenNumber = parseInt(enteredNumber);
  if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
    Alert.alert("Invalid Number!", "Number has to be a number between 1 and 99.", [{text: "Okay", style: "destructive", onPress: resetInputHandler}]);
    return;
  }

  onPickNumber(choosenNumber);
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
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
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
    backgroundColor: Colors.primary800,
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
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
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
