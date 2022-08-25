import React, { useEffect, useState } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { LOCAL_STORAGE_THEME_KEY } from '../../env';
import themes from '../app/themes';
import useIsFirstRender from '../hooks/useIsFirstRender';
import useLocalStorage from '../hooks/useLocalStorage';

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
  const { getValue, setValue } = useLocalStorage();
  const isFirstRender = useIsFirstRender();

  const onSwitchTheme = () => {
    setTheme((prevValue) => prevValue === Theme.Light ? Theme.Dark : Theme.Light);
  };

  useEffect(() => {
    if (isFirstRender) {
      const theme = getValue(LOCAL_STORAGE_THEME_KEY);

      if (theme != null) {
        setTheme(theme as Theme);
      } else {
        setValue(LOCAL_STORAGE_THEME_KEY, INITIAL_THEME);
      }
    }
  }, [getValue, isFirstRender, setValue]);

  useEffect(() => {
    if (!isFirstRender) {
      setValue(LOCAL_STORAGE_THEME_KEY, theme);
    }
  }, [isFirstRender, setValue, theme]);

  return (
    <ThemeSwitcherContext.Provider value={{ currentTheme: theme, onSwitchTheme }}>
      <StyledThemeProvider theme={themes[theme]}>
        {children}
      </StyledThemeProvider>
    </ThemeSwitcherContext.Provider>
  );
};

export default ThemeProvider;
