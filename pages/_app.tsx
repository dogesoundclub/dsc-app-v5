import '@/styles/globals.css'; // 필수
import "@/styles/custom.css"; // vaild path.
import "/public/static/fonts/style.css";

import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
