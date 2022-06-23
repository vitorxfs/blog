import React, { useState } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import themes from '../app/themes';

export enum Theme {
  Light = 'lightTheme',
  Dark = 'darkTheme'
}

interface ThemeSwitcherContextAttributes {
  onSwitchTheme: () => void;
}

export const ThemeSwitcherContext = React.createContext<ThemeSwitcherContextAttributes>({
  onSwitchTheme: () => {}
});

interface ThemeProviderProps {
  children?: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.Light);

  const onSwitchTheme = () => {
    setTheme((prevValue) => prevValue === Theme.Light ? Theme.Dark : Theme.Light);
  };

  return (
    <ThemeSwitcherContext.Provider value={{ onSwitchTheme }}>
      <StyledThemeProvider theme={themes[theme]}>
        {children}
      </StyledThemeProvider>
    </ThemeSwitcherContext.Provider>
  );
};

export default ThemeProvider;
