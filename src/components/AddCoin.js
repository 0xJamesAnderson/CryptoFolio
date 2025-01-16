import React, { useState } from 'react';

function AddCoin({ onAddCoin }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      onAddCoin({
        id: Date.now(),
        name,
        amount: parseFloat(amount)
      });
      setName('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Coin</h3>
      <input
        type="text"
        placeholder="Coin name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        step="0.0001"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddCoin;