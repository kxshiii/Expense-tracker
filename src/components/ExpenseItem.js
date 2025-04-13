import React from 'react';

function ExpenseItem({ expense }) {
  return (
    <div>
      <p>
        {expense.title}: ${expense.amount.toFixed(2)}
      </p>
    </div>
  );
}

export default ExpenseItem;