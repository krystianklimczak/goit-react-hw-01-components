import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import './materialize.js';
import M from 'materialize-css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.onload = function () { M.Collapsible.init(document.querySelectorAll('.collapsible')) }