import logo from './logo.svg';
import './App.css';
import Datastructure from './components/Datastructure';

function App() {
  return (
    <>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to the React search and find</h2>
        <div>
          <Datastructure/>
        </div>
      </div>
    </>
  );
}

export default App;
