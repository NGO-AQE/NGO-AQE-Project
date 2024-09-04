import App from './App.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tailwind.scss';
import { SanityProvider } from './SanityContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <SanityProvider>
      <App />
    </SanityProvider>
  // </React.StrictMode>,
);
