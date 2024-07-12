import React from "react";
import { View } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
function amountChangeHandler() {}

  return (
    <View>
      <Input label="Amount" textInputConfig={{
        keyboardType: "number-pad",
        onChangeText: amountChangeHandler,
      }}/>
      <Input label="Date" textInputConfig={{
        placeholder: "YYYY-MM-DD",
        maxLength: 10,
        onChangeText: () => {},
      }} />
      <Input label="Description" textInputConfig={{
        multiline: true,
        autoCorrect: false,
        autoCapitalize: "sentences",
      }} />
    </View>
  );
};

export default ExpenseForm;
