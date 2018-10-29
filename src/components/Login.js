import React, { Component } from 'react';
import AuthContext from '../contexts/AuthContext';

class Login extends Component {
  static contextType = AuthContext

  render() {
    const { isAuth } = this.context
    return (
      <div className="btn" onClick={this.context.toggleAuth}>
        {isAuth ? 'Login' : 'Logout'}
      </div>
    )
  }
}

export default Login;
