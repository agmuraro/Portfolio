import { createRoot } from 'react-dom/client';
import React from 'react';
import './styles/index.css';
import App from './app/App.tsx';
import { LanguageProvider } from './i18n/LanguageContext.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
