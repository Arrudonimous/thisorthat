import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import api from './services/api';

api.defaults.headers.authorization = `Bearer ${localStorage.getItem('token')}`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
