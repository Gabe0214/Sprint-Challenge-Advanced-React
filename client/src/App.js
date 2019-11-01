import React from 'react';
import logo from './logo.svg';
import './App.css';
import WomenList from './components/WomenList'
import Team from './components/Team'

function App() {
  return (
    <div className="App">
     <h1>Women's World Cup</h1> 
     <Team/>
     <WomenList/> 
    </div>
  );
}

export default App;
