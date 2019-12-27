// conditional rendering
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js'
import Welcome from './components/Welcome.js'
import Message from './components/Message'
import Counter from './components/Counter'
import ParentComponent from './components/parentComponent'
import UserGreeting from './components/userGreeting';
import NameList from './components/NameList';


function App() {
  return (
    <div className="App">
      <NameList/>
      <UserGreeting/>
      <ParentComponent/>
      <Counter></Counter>
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
