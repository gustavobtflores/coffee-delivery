import axios from 'axios';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { GlobalStyle } from './styles/globalStyle';
import { lightTheme } from './styles/themes/light';

function App() {
  useEffect(() => {
    axios('https://tranquil-cove-89175.herokuapp.com/coffees.json').then(
      (res) => {
        console.log(res);
      }
    );
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
