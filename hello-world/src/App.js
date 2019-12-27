import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js'
import Welcome from './components/Welcome.js'
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      <Message/>
      <Greet name="rahul">
        <p>this is children tag</p>
      </Greet>
      <Greet name="goyal">
        <button>Action</button>
      </Greet>
      <Welcome/>
  
    </div>
  );
}

export default App;
