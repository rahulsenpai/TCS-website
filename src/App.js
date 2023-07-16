import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Menu from "./components/Menu/Menu";
import HomePage from './views/HomePage';

import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = [
    {
      label: "Home",
      path: "/"
    }, {
      label: "Instagram",
      path: "https://www.instagram.com/__rahul_goyal___/",
      lowPriority: true
    }, {
      label: "Facebook",
      path: "https://www.facebook.com/profile.php?id=100038954747406",
      lowPriority: true
    }, {
      label: "GitHub",
      path: "https://github.com/rahulsenpai",
      lowPriority: true
    }, {
      label: "Photos",
      path: "https://www.instagram.com/__rahul_goyal___/",
    }, {
      label: "Registration",
      path: "https://www.instagram.com/__rahul_goyal___/",
    }
  ];

  return (
    <>
      {showMenu &&
        <Menu
          items={menuItems}
          close={() => setShowMenu(false)}
          />
      }
      <Navbar
        items={menuItems}
        openMenu={() => setShowMenu(true)}
        />
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/test" element={<HomePage/>}/>
          <Route path="*" element={<h1>404</h1>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
