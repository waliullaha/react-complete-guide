import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = () => {

  const saveHandler = (expenseData) => {

    const expenseNewData = {
      ...expenseData,
      id: Math.random().toString()
    };

    console.log(expenseNewData);
  }

  return (
      <div className="new-expense">
          <ExpenseForm onExpenseSave={saveHandler} />
      </div>
  );
};

export default NewExpense;