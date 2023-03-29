import 'reset-css';
import { useEffect } from 'react'
import '../styles/globals.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App({ Component, pageProps }) {
  console.log('whole app render')

  return <Component {...pageProps} />;
};