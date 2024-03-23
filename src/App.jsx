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
        </div>
      </div>
      <input type='check box' className='chat-box' height={200} ></ input>
    </>
  );
}

export default App;