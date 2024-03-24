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
            <img className="picture" src={sustainabilityImage} alt="Hand Logo"/>
          </a>
          <h1 id="main-heading">Hoohacks 2024 Project</h1>
        </div>
      </div>
      
      <div className="buttons-container">
        <a href='./China.jsx'><button className="button">China</button></a>
        <button className="button">Thailand</button>
        <button className="button">Nigeria</button>
        <button className="button">Egypt</button>
        </div>
        <div>
        <button className="button">Venezuela</button>
        <button className="button">Morocco</button>
      </div>
      <br></br><br></br>
    </>    
  );
}

export default App;
