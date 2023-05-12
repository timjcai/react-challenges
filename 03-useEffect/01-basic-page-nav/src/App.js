import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    console.log('changed page')
    fetch(`http://jsonplaceholder.typicode.com/${page}`)
      .then(response => response.json())
      .then(json => setItems(json))
    // when we change navigation we want to call useEffect to pull information from an API to generate new content
  }, [page])

  return (
    <div className="App">
      <button onClick={e => setPage('posts')}>Posts</button>
      <button onClick={e => setPage('comments')}>Comments</button>
      <button onClick={e => setPage('users')}>Users</button>
      <button onClick={e => setPage('todos')}>Todos</button>
      <h1> {page} </h1>
      <div>
        {items.map(item => {
          return <pre> {JSON.stringify(item)} </pre>
        })}
      </div>
    </div>
  );
}

export default App;
