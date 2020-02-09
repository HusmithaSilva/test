import React from 'react';
import logo from './logo.svg';
import './App.css';
import Click from './Intermediate1/clickCounter'
import HoverCoun from './Intermediate1/HoverCounter'
import Witcoun from './Intermediate1/withCounter';
function App() {
  return (
    <div className="App">
     <Click></Click>
     <HoverCoun></HoverCoun>
     <Witcoun></Witcoun>
    </div>
  );
}

export default App;
