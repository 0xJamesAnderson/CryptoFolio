import React, { useState, useEffect } from 'react';
import CoinList from './components/CoinList';
import AddCoin from './components/AddCoin';

function App() {
  const [coins, setCoins] = useState(() => {
    const saved = localStorage.getItem('cryptofolio');
    return saved ? JSON.parse(saved) : [];
  });

  const handleAddCoin = (newCoin) => {
    setCoins([...coins, newCoin]);
  };

  useEffect(() => {
    localStorage.setItem('cryptofolio', JSON.stringify(coins));
  }, [coins]);

  const handleDeleteCoin = (id) => {
    setCoins(coins.filter(coin => coin.id !== id));
  };

  return (
    <div>
      <h1>CryptoFolio</h1>
      <p>Your personal crypto portfolio tracker</p>
      <AddCoin onAddCoin={handleAddCoin} />
      <CoinList coins={coins} onDelete={handleDeleteCoin} />
    </div>
  );
}

export default App;