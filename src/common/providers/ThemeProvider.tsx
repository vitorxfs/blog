import React, { useState } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import themes from '../app/themes';

export enum Theme {
  Light = 'lightTheme',
  Dark = 'darkTheme'
}

const INITIAL_THEME = Theme.Light;

interface ThemeSwitcherContextAttributes {
  currentTheme: Theme;
  onSwitchTheme: () => void;
}

export const ThemeSwitcherContext = React.createContext<ThemeSwitcherContextAttributes>({
  currentTheme: INITIAL_THEME,
  onSwitchTheme: () => {}
});

interface ThemeProviderProps {
  children?: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(INITIAL_THEME);

  const onSwitchTheme = () => {
    setTheme((prevValue) => prevValue === Theme.Light ? Theme.Dark : Theme.Light);
  };

  return (
    <ThemeSwitcherContext.Provider value={{ currentTheme: theme, onSwitchTheme }}>
      <StyledThemeProvider theme={themes[theme]}>
        {children}
      </StyledThemeProvider>
    </ThemeSwitcherContext.Provider>
  );
};

export default ThemeProvider;
