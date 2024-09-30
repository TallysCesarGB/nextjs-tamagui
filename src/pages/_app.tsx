import "@tamagui/core/reset.css";
import { TamaguiProvider } from "tamagui";
import { NextThemeProvider } from "@tamagui/next-theme";
import appConfig from "../../tamagui.config"; // Ajuste o caminho
import type { AppProps } from "next/app"; // Importando o tipo AppProps

export default function App({ Component, pageProps }: AppProps) {
  // Definindo o tipo de Component e pageProps
  return (
    <NextThemeProvider>
      <TamaguiProvider config={appConfig}>
        <Component {...pageProps} />
      </TamaguiProvider>
    </NextThemeProvider>
  );
}
