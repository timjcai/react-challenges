import logo from './logo.svg';
import './App.css';
import Create from './components/Create'
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Create />
        <Task />
      </header>
    </div>
  );
}

export default App;
