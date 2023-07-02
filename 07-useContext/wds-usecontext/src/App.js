import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import FunctionContextComponent from './FunctionContextComponent'
import ClassContextComponent from './ClassContextComponent'

export const ThemeContext = React.createContext()

function App() {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <ThemeContext.Provider value={darkTheme}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <ClassContextComponent />
            <FunctionContextComponent />
          </ThemeContext.Provider>

        </header>
      </div>
    </>

  );
}

export default App;
