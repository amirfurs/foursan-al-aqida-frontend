import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// إنشاء جذر React وتثبيت التطبيق داخله
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);