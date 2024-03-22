import logo from './logo.svg';
import './App.css';
import { MathFunction } from './calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
This is venkatesh React App        </a>
<MathFunction/>
      </header>
    </div>
  );
}

export default App;
