import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Header from "./Header"
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Home/>
  </React.StrictMode>
);
