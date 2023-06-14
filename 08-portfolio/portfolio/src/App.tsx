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
      profilePicture: "https://res.cloudinary.com/dhxonutdu/image/upload/v1686732984/profile/20230209_LeWagon_0023_bv3mzo.jpg"
    },
    socialLinks: [{ socialType: "Github", url: "https://github.com/timjcai" }, { socialType: "Linkedin", url: "https://www.linkedin.com/in/tim-j-cai/" }],
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
