import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import "./App.css"

function App() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState('');

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  
  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.title.toLowerCase().includes(search.toLowerCase()) ||
      expense.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} setSearch={setSearch} />
      <ExpenseList expenses={filteredExpenses} />
    </div>
  );
}

export default App;
