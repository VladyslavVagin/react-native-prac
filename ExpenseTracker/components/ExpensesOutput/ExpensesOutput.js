// @ts-nocheck
import React from "react";
import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 94.12,
    date: new Date('2021-07-14'),
  },
  {
    id: "e2",
    description: "Groceries",
    amount: 44.99,
    date: new Date("2022-01-02"),
  },
  {
    id: "e3",
    description: "A pair of trousers",
    amount: 112.52,
    date: new Date("2023-09-30"),
  },
  {
    id: "e4",
    description: "Some bananas",
    amount: 56.56,
    date: new Date("2022-11-01"),
  },
  {
    id: "e5",
    description: "Some kiwi",
    amount: 6.06,
    date: new Date("2021-03-18"),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  }
});
