import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
     <Auth0Provider
    domain="dev-ydeqq4ws.us.auth0.com"
    clientId="NGcLZjQazv7DEZDBpfhXs3YOgcInIFZq"
    redirectUri={window.location.origin}
  >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();