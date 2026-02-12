import { useState } from 'react';
import './App.css';
const App = () => {
  const [count, setCount] = useState(7);
  const [inputVal, setInputVal] = useState(0);
  const handleSubmit = () => {
    setCount(Math.max(inputVal, 0));
    setInputVal(0);
  };
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
        <input
          type="text"
          className="input-box"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />

        <button onClick={handleSubmit} style={{ margin: '0 8px' }}>
          set {inputVal}
        </button>
      </div>
    </div>
  );
};

export default App;
