import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return <ThemeProvider theme={darkTheme}>
    <Component {...pageProps} />
  </ThemeProvider>

}

export default MyApp
