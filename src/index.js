import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// HashRouter->hash   BrowserRouter-history
import { HashRouter, BrowserRouter } from 'react-router-dom'
ReactDOM.render(
  <HashRouter><App /></HashRouter>,
  document.getElementById('root')
);

