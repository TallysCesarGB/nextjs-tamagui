import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { TamaguiProvider } from "tamagui"; // Para utilizar o provider
import appConfig from "../../tamagui.config"; // Ajuste o caminho conforme necessário

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>{/* Outros elementos <Head> necessários */}</Head>
        <body>
          <TamaguiProvider config={appConfig}>
            <Main />
            <NextScript />
          </TamaguiProvider>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
