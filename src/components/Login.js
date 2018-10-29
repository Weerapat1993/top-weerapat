import React, { Component } from 'react';
import AuthContext from '../contexts/AuthContext';

const styles = {
  btnLogin: {
    backgroundColor: 'white',
    marginRight: 20,
  }
}

class Login extends Component {
  static contextType = AuthContext

  render() {
    const { isAuth } = this.context
    return (
      <button style={styles.btnLogin} onClick={this.context.toggleAuth}>
        {isAuth ? 'Login' : 'Logout'}
      </button>
    )
  }
}

export default Login;
