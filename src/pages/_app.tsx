import type { AppProps } from 'next/app';

import GlobalStyle from '../styles/globalStyles';
import NavBar from '../common/components/NavBar';
import ThemeProvider from '../common/providers/ThemeProvider';

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
