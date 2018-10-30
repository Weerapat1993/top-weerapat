import React, { Component } from 'react';
import AuthContext from '../contexts/AuthContext';

class Login extends Component {
  static contextType = AuthContext

  render() {
    const { isAuth } = this.context
    return (
      <button className="btn btn--default" onClick={this.context.toggleAuth}>
        {isAuth ? 'Login' : 'Logout'}
      </button>
    )
  }
}

export default Login;
