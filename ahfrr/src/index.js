import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as LegacyThemeProvider } from '@mui/styles';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HistoryRouter as Router } from "redux-first-history/rr6";
import store, { history } from './store/configureStore'; // Path to your store file
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';

const container = document.getElementById('root');
const root = createRoot(container);
const theme = createTheme();
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
          <LegacyThemeProvider theme={theme}>
        <Router history={history}>
          <CssBaseline /> {/* Recommended: resets CSS & applies theme background */}
          <App />
        </Router>
      </LegacyThemeProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
