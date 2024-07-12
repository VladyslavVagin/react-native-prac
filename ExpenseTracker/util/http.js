import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://expenses-tracker-3d9dc-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
    expenseData
  );
}
