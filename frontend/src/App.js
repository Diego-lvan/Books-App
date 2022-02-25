import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editado <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img
          src="http://localhost:5002/users/sdfsadf"
          onError={(e) =>
            (e.currentTarget.src = "http://localhost:5002/users/user")
          }
          alt=""
          srcset=""
        />
      </header>
    </div>
  );
}

export default App;
