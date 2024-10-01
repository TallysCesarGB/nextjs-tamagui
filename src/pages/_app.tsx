import "@tamagui/core/reset.css";
import { TamaguiProvider } from "tamagui";
import { NextThemeProvider } from "@tamagui/next-theme";
import appConfig from "../../tamagui.config";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemeProvider>
      <TamaguiProvider config={appConfig}>
        <Component {...pageProps} />
      </TamaguiProvider>
    </NextThemeProvider>
  );
}
