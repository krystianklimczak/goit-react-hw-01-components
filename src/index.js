// css
import './index.css';

// libraries
import React from 'react';
import M from 'materialize-css';
import ReactDOM from 'react-dom/client';

// components
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.onload = function () { M.Collapsible.init(document.querySelectorAll('.collapsible')) }