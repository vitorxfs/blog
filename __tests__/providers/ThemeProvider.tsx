import React from 'react';

import '@testing-library/jest-dom';
import { getLuminance } from 'polished';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeConsumer } from 'styled-components';

import ThemeProvider, { ThemeSwitcherContext } from '../../src/common/providers/ThemeSwitcherProvider';

describe('ThemeProvider', () => {
  it('sets light theme by default', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer>
          {
            (value) => <><h1>{value.colors.background}</h1></>
          }
        </ThemeConsumer>
      </ThemeProvider>
    );

    const backgroundColor = screen.getByRole('heading').textContent;

    expect(backgroundColor && getLuminance(backgroundColor) > 0.5).toBeTruthy();
  });

  it('switches to dark theme', () => {
    render(
      <ThemeProvider>
        <ThemeSwitcherContext.Consumer>
          {({ onSwitchTheme }) => (
            <ThemeConsumer>
              {({ colors }) => (
                <>
                  <h1>{colors.background}</h1>
                  <button onClick={() => onSwitchTheme()}>Switch Theme</button>
                </>
              )}
            </ThemeConsumer>
          )}
        </ThemeSwitcherContext.Consumer>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('Switch Theme'));

    const backgroundColor = screen.getByRole('heading').textContent;

    expect(backgroundColor && getLuminance(backgroundColor) < 0.5).toBeTruthy();
  });

  it('switches back to light theme', () => {
    render(
      <ThemeProvider>
        <ThemeSwitcherContext.Consumer>
          {({ onSwitchTheme }) => (
            <ThemeConsumer>
              {({ colors }) => (
                <>
                  <h1>{colors.background}</h1>
                  <button onClick={() => onSwitchTheme()}>Switch Theme</button>
                </>
              )}
            </ThemeConsumer>
          )}
        </ThemeSwitcherContext.Consumer>
      </ThemeProvider>
    );

    const buttonElement = screen.getByText('Switch Theme');

    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);

    const backgroundColor = screen.getByRole('heading').textContent;

    expect(backgroundColor && getLuminance(backgroundColor) > 0.5).toBeTruthy();
  });
});
