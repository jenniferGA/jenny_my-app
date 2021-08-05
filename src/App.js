import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         buenas buenas
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=Gm3YR17NUY8&list=RDGm3YR17NUY8&start_radio=1"

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
