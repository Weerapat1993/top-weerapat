

import React from 'react';
import logo from '../assets/icons/logo.svg';

const PageLoading = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Loading ...</p>
    </header>
  </div>
)

export default React.memo(PageLoading);
