import { useState } from 'react';
import './App.css';
const App = () => {
  const [count, setCount] = useState(7);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>

        <button onClick={() => setCount(0)} style={{ margin: '0 20px' }}>
          Reset
        </button>

        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <div style={{ margin: '10px 0' }}>
        <input type="text" className="input-box" />

        <button style={{ margin: '0 8px' }}>set</button>
      </div>
    </div>
  );
};

export default App;
