import Providers from "@/components/Providers";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <SessionProvider session={pageProps.session}>
        <div data-theme="cyberpunk">
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </Providers>
  );
}
