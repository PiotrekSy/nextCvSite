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
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handleLightModeChange = () => {
      if (darkModeMediaQuery.matches) {
        document.documentElement.classList.add('light-mode');
      } else {
        document.documentElement.classList.remove('light-mode');
      }
    };
    handleLightModeChange();
    darkModeMediaQuery.addEventListener('change', handleLightModeChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleLightModeChange);
  }, []);

  return <Component {...pageProps} />;
};