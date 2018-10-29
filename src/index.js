import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './config/store'
import './styles/index.scss';
import Routes from './routes'
import * as serviceWorker from './serviceWorker';

// Language
import './language'

const App = () => (
  <Provider store={configureStore()}>
    <Routes />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
