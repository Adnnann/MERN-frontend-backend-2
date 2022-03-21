import React from 'react';
import MainRouter from './MainRouter';
import { ThemeProvider } from '@mui/styles';
import theme from './theme';
const App = () => {
  return (
   <ThemeProvider theme={theme}>
      <MainRouter />
   </ThemeProvider>
    
  );
}

export default App;
