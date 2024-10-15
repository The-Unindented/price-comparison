import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

const container = document.getElementById('root'); // or your root element ID
const root = createRoot(container);
root.render(<App />);
