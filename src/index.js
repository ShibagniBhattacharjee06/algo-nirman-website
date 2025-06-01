// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'

import App from './App'; // Make sure this path is correct

// Get the root DOM element
const container = document.getElementById('root');

// Create a root
const root = createRoot(container); // Use createRoot instead of ReactDOM.render

// Render your app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);