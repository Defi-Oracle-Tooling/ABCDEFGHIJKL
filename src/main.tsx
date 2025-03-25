import React from 'react';
import ReactDOM from 'react-dom/client';
import UserInterface from './components/UserInterface';
import ErrorBoundary from './ErrorBoundary'; // New component

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <UserInterface />
    </ErrorBoundary>
  </React.StrictMode>
);
