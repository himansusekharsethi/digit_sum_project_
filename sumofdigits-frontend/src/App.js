import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/api/sum/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ number })
    });
    const data = await response.json();
    setResult(data.sum);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Sum of Digits</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {result !== null && <h3>Sum of digits: {result}</h3>}
    </div>
  );
}

export default App;
