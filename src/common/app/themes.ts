import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    background: '#FFFFFF',
    primary: '#F80AE0',
    typography: {
      primary: '#000000',
      secondary: '#5D5C5C'
    }
  }
};

export const darkTheme: DefaultTheme = {
  colors: {
    background: '#000000',
    primary: '#F80AE0',
    typography: {
      primary: '#FFFFFF',
      secondary: '#ADACAC'
    }
  }
};

const themes = {
  darkTheme,
  lightTheme
};

export default themes;
