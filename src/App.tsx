import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { GlobalStyle } from './styles/globalStyle';
import { lightTheme } from './styles/themes/light';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Toaster />
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
