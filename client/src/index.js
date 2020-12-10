import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

//main component rendered here
import App from './views/Components/App';
// site styling 
import "./assets/scss/material-kit-react.css";



if (process.env.NODE_ENV !== 'production') {
  const getCSRFToken = () => {
    return fetch("api/csrf/token")
  }
  getCSRFToken();
}

const initialState = {
  email: 'fellowStacker@stacker.com',
  password: 'password'
}
const store = configureStore()

ReactDOM.render(
  <Provider store={store} >
    <App className='App' />
  </Provider>,
  document.getElementById('root')
);
