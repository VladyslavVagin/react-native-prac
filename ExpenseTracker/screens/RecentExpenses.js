// @ts-nocheck
import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../context/expenses-context";
import { getDateMinusDays } from "../util/date";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const RecentExpenses = () => {
  const { expenses } = useContext(ExpensesContext);
  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const day7DaysAgo = getDateMinusDays(today, 7);
    return expense?.date >= day7DaysAgo && expense?.date <= today;
  });

  return (
    <ExpensesOutput
      expensesPeriod="Last 7 days"
      expenses={recentExpenses}
      fallbackText="No expenses registered for the last 7 days."
    />
  );
};

export default RecentExpenses;
