import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Fake_Exenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 84.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 84.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e3",
    title: "Toilet Paper",
    amount: 84.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e4",
    title: "Toilet Paper",
    amount: 84.12,
    date: new Date(2020, 7, 14),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Fake_Exenses);

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
