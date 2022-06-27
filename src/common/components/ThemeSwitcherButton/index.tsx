import React from 'react';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { Theme } from '../../providers/ThemeProvider';

const ThemeSwitcherButton: React.FC = () => {
  const { currentTheme, onSwitchTheme } = useThemeSwitcher();

  const renderIcon = (theme: Theme) => {
    switch (theme) {
      case Theme.Dark:
        return (<p>Dark</p>);
      case Theme.Light:
      default:
        return (<p>Light</p>);
    }
  };

  return (
    <button onClick={onSwitchTheme}>
      {renderIcon(currentTheme)}
    </button>
  );
};

export default ThemeSwitcherButton;
