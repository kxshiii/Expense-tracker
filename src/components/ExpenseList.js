import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))
      )}
    </div>
  );
}

export default ExpenseList;