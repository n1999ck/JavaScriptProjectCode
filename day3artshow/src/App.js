import logo from "./logo.svg";
import "./App.css";
import Display from "./Display";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Display />
        <p>Hello World!</p>
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
