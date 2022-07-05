import React, { useState} from 'react';
import './FormExpense.css';

const FormExpense = (props) => {
  const [EnteredTitle, setEnteredTitle] = useState('');
  const [EnteredAmount, setEnteredAmount] = useState('');
  const [EnteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => { 
    setEnteredTitle(event.target.value);
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();   //Phuong thuc ngan chan mac dinh

    const expenseData = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate)
    }

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler} >
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} value={EnteredTitle} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} value={EnteredAmount} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler} value={EnteredDate} />
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  )
}

export default FormExpense