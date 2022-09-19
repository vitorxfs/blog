import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps (ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()]
      };
    } finally {
      sheet.seal();
    }
  }

  render () {
    return (
      <Html lang="pt-br">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Limelight&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"></link>
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:site_name" content="pt_BR" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@vitorsnx" />
          <meta name="twitter:creator" content="@vitorsnx" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};
