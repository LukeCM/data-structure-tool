import logo from './logo.svg';
import './App.css';
import Datastructure from './components/Datastructure';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the React search and find</h1>
        <Datastructure/>
      </header>
    </div>
  );
}

export default App;
