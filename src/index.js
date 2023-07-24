import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChosenProjectProvider } from './contexts/ChosenProject';
import { IsLoadingProjectPreviewContextProvider } from './contexts/IsLoadingProjectPreviewContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChosenProjectProvider>
      <IsLoadingProjectPreviewContextProvider>
       <App />
      </IsLoadingProjectPreviewContextProvider>
    </ChosenProjectProvider>
  </React.StrictMode>
);


