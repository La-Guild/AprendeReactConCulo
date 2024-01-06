import React from 'react';
import logo from './logo.svg';
import './App.css';

//[ ] Por qué se pinta el botón en el centro?
//[ ] Como hacer que reaccione react a lo que hacemos
//[ ] Por qué no se actualiza el número de WTFs?


var wtf = 0;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          WTFs por minuto {wtf}
        </p>
        <button onClick={() => wtf = wtf +1}>
          WTF
        </button>
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
