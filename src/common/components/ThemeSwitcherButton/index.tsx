import React from 'react';

import { Moon, Sun } from 'react-feather';

import { RoundButton } from './styles';
import { Theme } from '../../providers/ThemeProvider';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

const ThemeSwitcherButton: React.FC = () => {
  const { currentTheme, onSwitchTheme } = useThemeSwitcher();

  const ariaLabel = `Alterar para tema ${currentTheme === Theme.Light ? 'escuro' : 'claro'}`;

  const renderIcon = (theme: Theme) => {
    switch (theme) {
      case Theme.Dark:
        return (<Moon />);
      case Theme.Light:
      default:
        return (<Sun />);
    }
  };

  return (
    <RoundButton onClick={onSwitchTheme} aria-label={ariaLabel}>
      {renderIcon(currentTheme)}
    </RoundButton>
  );
};

export default ThemeSwitcherButton;
