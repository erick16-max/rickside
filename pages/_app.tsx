import '@/styles/globals.css'
import { AppProps } from 'next/app'
import { ColorModeContext, useMode } from '@/theme'
import { CssBaseline, ThemeProvider, duration } from '@mui/material'
import { useEffect, useRef } from 'react';





export default function App({ Component, pageProps }: AppProps) {
  const [theme, colorMode] = useMode();
  const ref = useRef(null);
  
  return (
    //@ts-ignore
    <ColorModeContext.Provider value={colorMode}>
      {/* 
         // @ts-ignore */}
       <ThemeProvider theme={theme}>
        <CssBaseline />
        <main >
           
                <Component {...pageProps} />
         
        </main>
       </ThemeProvider>
    </ColorModeContext.Provider>
  )
} 
