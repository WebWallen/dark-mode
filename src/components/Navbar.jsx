import React, { useState } from 'react';
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode); // Anytime you use set with an argument starting in !, you are flipping its current setting. 
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle" onClick={toggleMode}>
        <div className={darkMode ? 'toggle toggled' : 'toggle'} />
      </div>
    </nav>
  );
};

export default Navbar;
