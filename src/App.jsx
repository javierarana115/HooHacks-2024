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
        <button className="button">Button 1</button>
        <button className="button">Button 2</button>
        <button className="button">Button 3</button>
        <button className="button">Button 4</button>
        </div>
        <div>
        <button className="button">Button 5</button>
        <button className="button">Button 6</button>
      </div>
      <br></br><br></br>
      <div>
      <input type='check box' className='chat-box' height={100} ></ input>
      </div>
    </>
    
  );
}

export default App;
