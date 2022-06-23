import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      typography: {
        primary: string;
        secondary: string;
      };
    };
    breakPoints: {
      sm: string;
      md: string;
      lg: string;
    }
  }
};
