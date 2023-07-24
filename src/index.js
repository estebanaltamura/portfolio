import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChosenProjectProvider } from './contexts/ChosenProject';
import { IsLoadingPreviewVideosProvider } from './contexts/IsLoadingPreviewVideosProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChosenProjectProvider>
      <IsLoadingPreviewVideosProvider>
       <App />
      </IsLoadingPreviewVideosProvider>
    </ChosenProjectProvider>
  </React.StrictMode>
);


