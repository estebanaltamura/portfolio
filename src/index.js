import React from 'react';
import ReactDOM from 'react-dom/client';
import { CurrentProyectSelectedContextProvider } from './contexts/CurrentProyectSelectedContextProvider';
import { IsLoadingProjectPreviewContextProvider } from './contexts/IsLoadingProjectPreviewContextProvider';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CurrentProyectSelectedContextProvider>
      <IsLoadingProjectPreviewContextProvider>
       <App />
      </IsLoadingProjectPreviewContextProvider>
    </CurrentProyectSelectedContextProvider>
  </React.StrictMode>
);


