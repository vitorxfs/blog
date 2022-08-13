import React from 'react';
import ThemeSwitcherButton from '../ThemeSwitcherButton';

import { Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <ThemeSwitcherButton />
    </Container>
  );
};

export default NavBar;
