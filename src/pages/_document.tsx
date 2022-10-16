import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link href="https://fonts.gstatic.com" rel="preconnect" />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;900&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;800&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
