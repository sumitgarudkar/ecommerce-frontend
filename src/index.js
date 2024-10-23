// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  // Import Provider from react-redux
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';  // Import the Redux store
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>   {/* Wrap the App inside the Provider */}
    <App />
  </Provider>
);
