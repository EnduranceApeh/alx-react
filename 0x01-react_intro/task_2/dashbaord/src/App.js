import logo from './holberton-logo.jpg';
import './App.css'
import {getFullYear, getFooterCopy} from './utils'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email"></input>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password"></input>
          <button>OK</button>
        </form>
      </div>

      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </div>
  );
}

export default App;
