

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
            <div className='float-left'>
              <NavLink className='App-link' to='/'>Home</NavLink> &nbsp;
              <NavLink className='App-link' to='/about'>About</NavLink> &nbsp;
              <NavLink className='App-link' to='/contact'>Contact</NavLink> &nbsp;
            </div>
            <div className='float-right'>
              <Login />
            </div>
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
