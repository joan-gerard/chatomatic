import React from 'react';
import ReactDOM from 'react-dom/client';
import Chat from './Chat';
import "./index.css"

const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Chat />
  </React.StrictMode>
);