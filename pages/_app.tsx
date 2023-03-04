import '@/styles/globals.css'; // 필수
import "@/styles/custom.css"; // vaild path.
import Head from 'next/head'
import "/public/static/fonts/style.css";
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
