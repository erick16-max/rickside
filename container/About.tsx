import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import AboutImage from '../public/img/about-2.svg'
import { styled } from '@mui/material/styles';
import { motion} from 'framer-motion';


const AboutBox = styled('section')(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingBottom: theme.spacing(2),
  backgroundColor: '#e6f0ff',
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

  const imageAnimate = {
    offScreen: {
      opacity: 0, 
      x:100,
    },
    onScreen: {
      opacity: 1, 
      x: 0,
      transition:{
        type: "spring",
        bounce: 0.6,
        duration: 2.5,
      }
      
    },
  }

  const aboutTextAnimate = {
    offScreen: {
      opacity: 0, 
      x:-100,
    },
    onScreen: {
      opacity: 1, 
      x: 0,
      transition:{
        type: "spring",
        bounce: 0.6,
        duration: 2.5,
      }
      
    },
  }


  return (
    <motion.div
      
    >

      <AboutBox id='about-container' >
        <motion.div
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{once: true, amount: 0.3}}
          variants={aboutTextAnimate}
        >
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
        </motion.div>
        
        <motion.div
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{once: true, amount: 0.3}}
          variants={imageAnimate}
          
        >

          <Image 
            id='about-image'
            src={AboutImage}
            alt='About Image'
            width={500}
            height={500}
          />
        </motion.div>
        
    
      </AboutBox>
    </motion.div>
  )
}
