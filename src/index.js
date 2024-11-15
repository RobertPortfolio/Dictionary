import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from  'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import AuthService from './services/auth-service';
import { AuthServiceProvider } from './components/auth-service-context';

import store from './store';
const authService = new AuthService();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AuthServiceProvider value={authService}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthServiceProvider>
  </Provider>
);

