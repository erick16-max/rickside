import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import AboutImage from '../public/img/about-2.svg'
import { styled } from '@mui/material/styles';


const AboutBox = styled('section')(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingBottom: theme.spacing(2),
  backgroundColor: '#f8fbff',
  display: 'flex', 
  justifyContent: 'space-between', 
  width: '100%',
  [theme.breakpoints.down('md')]: {
   
  },
  [theme.breakpoints.up('md')]: {
    
  },
  [theme.breakpoints.up('lg')]: {
   
  },
}));


export const About = () => {
  return (
    <AboutBox id='about-container' >
      <Box
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
      >
        <Typography 
          id='about-heading'
          variant='h3' 
          lineHeight={1.4} 
          fontWeight={700} 
          fontSize={58}
          sx={{
            color: '#154266'
          }}
          >
          Mobile, Desktop and Web Application Development Company
        </Typography>
        <Typography id='about-info'  variant='h5' sx={{color: '#6f7a87'}}>
          At RickSide Technologies, We focus on designing, building and customizing user friendly software application products that will
          mark your personal goal and business objectives.
        </Typography>
        <Button
              sx={{  
                bgcolor: "#ff1744", 
                "&:hover": {
                  bgcolor:"#ef5350",
                }, 
                width: 180,
                mt: 2,
                p:1,
                
              }}
              variant="contained"
              href="#contained-buttons"
            >
              <Typography variant='body1' fontWeight={600}>
                Get In Touch
              </Typography>
            </Button>
      </Box>
      
        <Image 
          id='about-image'
          src={AboutImage}
          alt='About Image'
          width={500}
          height={500}
        />
      
   
    </AboutBox>
  )
}
