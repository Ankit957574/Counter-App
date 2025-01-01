
import React, { useState } from "react";
import "./App.css"; 

function App() {
  const [count, setCount] = useState(0); 

  // const increment = () => setCount(count + 1);

  const increment = () => {
    if (count < 20) {
      setCount((count) => count + 1);
    } else {
      setCount(0); 
    }
  };

  // const decrement = () => setCount(count - 1);

  const decrement = () => {
    if (count > -20) {
      setCount((count) => count - 1);
    } else {
      setCount(0); 
    }
  };
  
  const reset = () => setCount(0);

  

  return (

    
    <div className="app-container">
      <h1>React Counter App</h1>
      <div className="counter-display">Counter: {count}</div>
      <div className="button-group">
        <button className="button increment" onClick={increment}>
          +
        </button>
        <button className="button decrement" onClick={decrement}>
          -
        </button>
        <button className="button reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
