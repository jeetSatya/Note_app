import { useState } from 'react'
import './App.css'

function App() {
  const handleButtonClick = () => {
    const name = prompt("Please enter your name:");
    if (name) {
      alert(`Hello, ${name}!`);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Note App</h1>
        <button onClick={handleButtonClick}>Click Me</button>
      </header>
    </div>
  );
}

export default App;