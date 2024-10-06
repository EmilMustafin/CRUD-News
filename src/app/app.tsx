import './styles/index.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppLoader } from './app-loader';
import { AppRouter } from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppLoader>
      <AppRouter />
    </AppLoader>
  </StrictMode>,
);
