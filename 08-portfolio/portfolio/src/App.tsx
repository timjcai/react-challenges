import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';

import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Page } from './pages/Page';
import { PageDb, SectionType } from './components/types';
import { FlexCont } from './components/common/Container/Container.styles';

const labeldata: SectionType[] = ['About', 'Portfolio', 'Work Experience']

const pageDB: PageDb = {
  tim: {
    user: {
      firstName: "Tim",
      lastName: "Cai",
      handle: "@tcai",
      profilePicture: "https://res.cloudinary.com/dhxonutdu/image/upload/v1686732984/profile/20230209_LeWagon_0023_bv3mzo.jpg",
      job: 'Web Developer'
    },
    socialLinks: [
      { socialType: "Github", url: "https://github.com/timjcai" },
      { socialType: "Linkedin", url: "https://www.linkedin.com/in/tim-j-cai/" },
      { socialType: "Website", url: "https://timjcai.github.io" },
      { socialType: "Blog", url: "https://timjcai.notion.site/Tim-s-Blog-835ba95701ee4a639e9da3e613a5960d" },
    ],
  },
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Profile pageData={pageDB['tim']} />
          <Routes>
            <Route path="/" element={<Page text={'About'} />} />
            <Route path="/about" element={<Page text={ 'About' } />} />
            <Route path="/portfolio" element={<Page text={ 'Portfolio'} />} />
            <Route path="/work-experience" element={<Page text={ 'Work Experience'}/>} />
          </Routes>
          <Navbar labels={ labeldata } />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
