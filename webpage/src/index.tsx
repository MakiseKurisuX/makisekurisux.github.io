import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { animateScroll as scroll } from 'react-scroll';
import './index.css';

const scrollToTop = () => {
  scroll.scrollToTop();
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);