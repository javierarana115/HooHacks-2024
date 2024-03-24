import React, { useState } from 'react';
import sustainabilityImage from './assets/sustainable-green-svgrepo-com.svg'; 
import './china.css';

function China() {
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
      <div>
      <div className='info-text'>
        <p>

        </p>
      </div>
      </div>
    </>
    
  );
}

export default China;
