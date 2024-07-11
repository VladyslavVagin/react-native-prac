import React from "react";
import { View, Text } from "react-native";

const ExpensesSummary = ({ periodName, expenses }) => {
  const expensesSumm = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSumm.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;
