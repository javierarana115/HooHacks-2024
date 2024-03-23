import React, { useState } from 'react';
import sustainabilityImage from './assets/sustainable-green-svgrepo-com.svg'; 
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header-container">
        <div className="logo">
          <a href="./App.jsx" target="_blank">
            <img className="picture" src={sustainabilityImage} alt="Hand Logo" height={300} />
          </a>
        </div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
