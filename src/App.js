import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
	  Hi there how are you
	  This is second line added after using voluems 
	  Third line Fourth line
	  Edit <code>src/App.js</code> and save to reload.
        </p><p> second line </p><p>FeatureLIne</p><p>Fourth</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
