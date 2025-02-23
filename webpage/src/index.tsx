import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { animateScroll as scroll } from 'react-scroll';

document.body.style.background = 'linear-gradient(to right, #e0eafc, #cfdef3)';
document.body.style.color = '#333';

document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.overflowX = 'hidden';

document.documentElement.style.height = '100%';
document.body.style.height = '100%';

const scrollToTop = () => {
  scroll.scrollToTop();
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);