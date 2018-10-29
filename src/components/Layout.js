

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext';
import Login from './Login';

class Layout extends Component {
  state = { isAuth: false }

  toggleAuth = () => {
    this.setState((prevState) => ({
      isAuth: !prevState.isAuth
    }))
  }

  render() {
    const { children } = this.props
    const { isAuth } = this.state
    return (
      <AuthContext.Provider
        value={{ isAuth, toggleAuth: this.toggleAuth }}
      >
        <div className="view">
          <nav className="App-navbar">
            <NavLink className='App-link' to='/'>Home</NavLink>
            <NavLink className='App-link' to='/about'>About</NavLink>
            <NavLink className='App-link' to='/contact'>Contact</NavLink>
            <div className="flex" />
            <Login />
          </nav>
          <div className="app-container">
            {children}
          </div>
        </div>
      </AuthContext.Provider>
    )
  }
}



export default Layout;
