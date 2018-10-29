

import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../assets/icons/logo.svg';

const Layout = ({ children }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <NavLink className='App-link' to='/'>Home</NavLink> &nbsp;
      <NavLink className='App-link' to='/about'>About</NavLink> &nbsp;
      <NavLink className='App-link' to='/contact'>Contact</NavLink> &nbsp;
      {children}
    </header>
  </div>
)

export default React.memo(Layout);
