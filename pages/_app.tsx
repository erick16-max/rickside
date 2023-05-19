import '@/styles/globals.css'
import { Roboto } from 'next/font/google'
import { AppProps } from 'next/app'
import { ColorModeContext, useMode } from '@/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'



const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  const [theme, colorMode] = useMode()
  return (
    //@ts-ignore
    <ColorModeContext.Provider value={colorMode}>
      {/* 
         // @ts-ignore */}
       <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className='app'>
            <Component {...pageProps} />
        </main>
       </ThemeProvider>
    </ColorModeContext.Provider>
  )
} 
