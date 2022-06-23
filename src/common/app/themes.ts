import { DefaultTheme } from 'styled-components';

const breakPoints: DefaultTheme['breakPoints'] = {
  sm: '600px',
  md: '900px',
  lg: '1200px'
};

export const lightTheme: DefaultTheme = {
  colors: {
    background: '#FFFFFF',
    primary: '#F80AE0',
    typography: {
      primary: '#000000',
      secondary: '#5D5C5C'
    }
  },
  breakPoints
};

export const darkTheme: DefaultTheme = {
  colors: {
    background: '#19181D',
    primary: '#F80AE0',
    typography: {
      primary: '#FFFFFF',
      secondary: '#B2B1B1'
    }
  },
  breakPoints
};

const themes = {
  darkTheme,
  lightTheme
};

export default themes;
