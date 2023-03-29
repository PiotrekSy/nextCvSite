import 'reset-css';
import { useEffect } from 'react'
import '../styles/globals.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App({ Component, pageProps }) {
  console.log('whole app render')

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (isMobile && !prefersLight) {
      document.documentElement.classList.add('force-light-mode');
    }
  }, []);



  return <Component {...pageProps} />;
};