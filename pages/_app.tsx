// Styling
import '../styles/tailwind.css';
import '../styles/base.css';
// Types
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
