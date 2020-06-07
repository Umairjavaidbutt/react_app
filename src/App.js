import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App({name, age}) {
  return <div>
    Hello from App.js updated <strong>{name}</strong><br/>
    <div>Age = {age -5}</div><br/>
    <ol className="mycolor">
    <li>AI</li>
    <li>IOT</li>
    <li>CNC</li>
    <li>BC</li>
    </ol>
    <p>Total = {10+20}</p>
    <br/>
    <Hello firstName={name}></Hello>
    </div>
}

export default App;
