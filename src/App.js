import logo from './logo.svg';
import './App.css';
import Datastructure from './components/Datastructure';

function App() {
  return (
    <div className="App">
      <body>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to the React search and find</h2>
        <Datastructure/>
      </body>
    </div>
  );
}

export default App;
