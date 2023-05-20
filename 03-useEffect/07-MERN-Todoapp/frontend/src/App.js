import logo from './logo.svg';
import './App.css';
import Create from './components/Create'
import Task from './components/Task';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const url = `http://localhost:3000/api/v1/todos`

    fetch(url)
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => setTodos(data))
      .catch(error => console.log(error))
  }, [todos])

  const todoList = todos.map((task) => (
    < Task props = {task} />
  ))

  return (
    <div className="App">
      <header className="App-header">
        <Create />
        <> { todoList }</>
      </header>
    </div>
  );
}

export default App;
