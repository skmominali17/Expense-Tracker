import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expense/Expenses";
import "./App.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 40799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 1200.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 750,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
