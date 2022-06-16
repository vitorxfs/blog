import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../common/app/themes';
import GlobalStyle from '../styles/globalStyles';

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
