import React from 'react';

function ExpenseItem({ expense }) {
  const formattedAmount = expense.amount.toFixed(2);

  return (
    <div style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd' }}>
      <h3>{expense.title}</h3>
      <p><strong>Amount:</strong> ${formattedAmount}</p>
      <p><strong>Description:</strong> {expense.description}</p>
    </div>
  );
}

export default ExpenseItem;
