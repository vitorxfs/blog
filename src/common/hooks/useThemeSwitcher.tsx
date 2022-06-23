import { useContext } from 'react';
import { ThemeSwitcherContext } from '../providers/ThemeProvider';

const useThemeSwitcher = () => {
  const context = useContext(ThemeSwitcherContext);

  if (!context) {
    throw new Error('useThemeSwitcher should be used within a ThemeProvider');
  }

  return context;
};

export default useThemeSwitcher;
