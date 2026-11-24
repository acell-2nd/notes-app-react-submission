import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";
import { FiMoon, FiSun } from 'react-icons/fi';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';
function Header({logout, nameLogut, name}) {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <header>
      <h1>
        <Link to="/">Aplikasi Catatan</Link>
        <p className='user-name'> Hallo {name}</p>
      </h1>
      <nav className="navigation">
        <ul>
          <li><button className="toggle-theme" type="button" onClick={toggleTheme}>
        {theme === 'dark' ? <FiSun /> : <FiMoon />}
      </button></li>
          <li><button className='button-logout' title='Logout' type='button' onClick={logout}>
      <FiLogOut/>
      {nameLogut}
     </button></li>
          <li>
            <Link to="/notes/archived">Arsip</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
