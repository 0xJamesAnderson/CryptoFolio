import React, { useState } from 'react';
import CoinList from './components/CoinList';
import AddCoin from './components/AddCoin';

function App() {
  const [coins, setCoins] = useState([]);

  const handleAddCoin = (newCoin) => {
    setCoins([...coins, newCoin]);
  };

  return (
    <div>
      <h1>CryptoFolio</h1>
      <p>Your personal crypto portfolio tracker</p>
      <AddCoin onAddCoin={handleAddCoin} />
      <CoinList coins={coins} />
    </div>
  );
}

export default App;