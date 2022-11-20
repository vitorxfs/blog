import React from 'react';

import { Moon, Sun } from 'react-feather';
import { motion } from 'framer-motion';

import { RoundButton } from './styles';
import { Theme } from '@common/providers/ThemeProvider';
import useThemeSwitcher from '@common/hooks/useThemeSwitcher';

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
      <motion.div whileTap={{ scale: [1, 0, 0, 1] }} whileHover={{ scale: 1.1 }}>
        {renderIcon(currentTheme)}
      </motion.div>
    </RoundButton>
  );
};

export default ThemeSwitcherButton;
