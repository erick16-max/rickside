import Head from 'next/head'
import { Box, colors, useTheme } from '@mui/material'
import { tokens } from '@/theme'
import Header from '@/container/Header'
import { About } from '@/container/About'
import { useState, useEffect, Suspense } from 'react'
import { Loader } from '@/container/Loader'
import { Services } from '@/container/Services'


export default function Home() {
const theme = useTheme()
const colors = tokens(theme.palette.mode)
const backgroundColorContent = theme.palette.mode === 'dark' ? `${colors.blackPrimary[500]}` : '#e6f0ff'

const [navBg, setNavBg] = useState<boolean>(false);
const [isLoading, setIsLoading] = useState<boolean>(true)
  

  const changeNavBg = () => {
   window.scrollY >= 10 ? setNavBg(true) : setNavBg(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])


  return (
    <>
      <Head>
        <title>RickSide Tech - Software Development Company</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/fav.png" />
      </Head>
      {
        isLoading ?
        <Loader /> :

      <Suspense fallback={<Loader />}>
        <Box onScroll={changeNavBg} component={'main'} display='flex' flexDirection={'column'} justifyContent={'center'}>
          <Header navBg={navBg}/>
          <About />
          <Services />
        </Box>
      </Suspense>
      }
      
    </>
  )
}


