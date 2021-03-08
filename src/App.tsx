import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import GlobalStyle from './styles/globalStyle';

import globalStyles from './styles/global';

import Routes from './routes';

const App: React.FC = () => {
  const theme = createMuiTheme(globalStyles);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
