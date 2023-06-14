import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom'
import { Profile } from './components/Profile/Profile';
import { PageDb, SectionType } from './components/types';

const labeldata: SectionType[] = ['About', 'Portfolio', 'Work Experience', 'Contact']

const pageDB: PageDb = {
  tim: {
    user: {
      firstName: "Tim",
      lastName: "Cai",
      handle: "@tcai",
    },
    socialLinks: [{ socialType: "Github", url: "https://tim.facebook.com" }],
  },
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Profile pageData={pageDB['tim']} />
          <Navbar labels={ labeldata } />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
