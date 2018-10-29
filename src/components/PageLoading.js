

import React from 'react';
import logo from '../assets/icons/logo.svg';

const PageLoading = () => (
  <div className="page-loading">
    <img src={logo} className="App-logo" alt="logo" />
    <p>Loading ...</p>
  </div>
)

export default React.memo(PageLoading);
