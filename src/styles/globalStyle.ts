import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    font-family: 'Roboto', sans-serif;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Baloo 2', cursive;
  }

  svg {
    display: block;
  }
`;
