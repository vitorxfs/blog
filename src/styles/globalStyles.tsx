import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.typography.primary};

    transition: background-color ease 200ms;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::-moz-selection { /* Code for Firefox */
    background: ${(props) => props.theme.colors.primary};
  }

  ::selection {
    background: ${(props) => props.theme.colors.primary};
  }
`;

export default GlobalStyle;
