import logo from './logo.svg';
import './App.css';
import LoginButton from "./components/Login";
import LogoutButton from "./components/Logout";
import Profile from "./components/Profile";
import TestButton from "./components/Test";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TestButton/>
        <LoginButton/>
        <br/><br/>
        <LogoutButton/>
        <br/><br/>
        <Profile/>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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