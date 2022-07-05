import React from 'react';
import FormExpense from './FormExpense';
import './NewExpense.css';

const NewExpense = () => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData)
  }
  return (
    <div className='new-expense'>
      <FormExpense onSaveExpenseData = {saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense