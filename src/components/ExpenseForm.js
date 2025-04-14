import React, { useState } from 'react';

function ExpenseForm({ onAddExpense, setSearch }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && amount) {
      onAddExpense({ title, amount: parseFloat(amount), description, id: Date.now() });
      setTitle('');
      setAmount('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Expense</button>

     
      <input
        type="text"
        placeholder="Search expenses..."
        onChange={(e) => setSearch(e.target.value)} 
      />
    </form>
  );
}

export default ExpenseForm;
