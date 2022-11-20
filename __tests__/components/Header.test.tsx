import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from '@common/components/Header';
import ThemeProvider from '@common/providers/ThemeProvider';

describe('Home', () => {
  it('renders the website title', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    const title = screen.getByRole('link', {
      name: /Vitor Sanches/,
    });

    expect(title).toBeInTheDocument();
  });
});
