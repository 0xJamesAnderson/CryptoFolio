import React from 'react';

function CoinList({ coins, onDelete }) {
  return (
    <div>
      <h2>My Holdings</h2>
      {coins.length === 0 ? (
        <p>No coins added yet</p>
      ) : (
        <ul>
          {coins.map(coin => (
            <li key={coin.id}>
              {coin.name} - {coin.amount} units @ $-- (Total: $--)
              <button onClick={() => onDelete(coin.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CoinList;