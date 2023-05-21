//@ts-nocheck
import { Box, Grid, Typography , Card } from '@mui/material'
import React from 'react'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';



export const Services = () => {
  return (
    <Box p={4} display='flex' justifyContent={'center'} flexDirection={'column'}>
        <Typography component={'div'} mb={4} >
            <Typography 
                className='service-title'
                variant='h4' 
                color={'#154266'} 
                fontWeight={600}
                sx={{
                    borderBottom: 3,
                    borderBottomWidth: 4,
                    borderBottomColor: '#ff4569',
                    width:40,
                    
                }}
                
                >
                    Services
                </Typography>
                
            <Typography 
                margin={'auto'} 
                variant='body1'
                color={'#59626c'}
                fontSize={18}
                mt={2}
                >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis impedit quam
                 ipsam facilis eveniet doloremque reprehenderi magni sunt rerum earum odio pariatur
                  aspernatur atque quae, consectetur in suscipit doloribus sapiente.
            </Typography>
        </Typography>
        
        <Grid container spacing={2}>
            <Grid item lg={4} md={6} sm={6} xs={12} >
                <Card 
                    variant='outlined'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: 4,
                    }}
                >
                   <Typography 
                        component={'div'} 
                        display={'flex'} 
                        justifyContent="center" 
                       
                        flexDirection={'column'}
                        color='#154266'
                    >
                         <LanguageOutlinedIcon sx={{fontSize: 64}}/>
                         <Typography 
                            fontWeight={600} 
                            variant='h6'
                         >
                            Websites & Web Apps
                        </Typography>
                   </Typography>
                   <Typography variant='body1' color="#59626c" fontSize={18}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Non nostrum libero ipsa voluptatum repellat, accusantium sapiente est 
                     natus distinctio sit quisquam amet ab quae consequatur, animi numquam at voluptatibus laudantium.
                   </Typography>
                </Card>
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
               <Card 
                    variant='outlined'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: 4,
                    }}
                >
                   <Typography 
                        component={'div'} 
                        display={'flex'} 
                        justifyContent="center" 
                       
                        flexDirection={'column'}
                        color='#154266'
                    >
                         <PhoneIphoneOutlinedIcon sx={{fontSize: 64}}/>
                         <Typography 
                            fontWeight={600} 
                            variant='h6'
                         >
                            Mobile Applications
                        </Typography>
                   </Typography>
                   <Typography variant='body1' color="#59626c" fontSize={18}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Non nostrum libero ipsa voluptatum repellat, accusantium sapiente est 
                     natus distinctio sit quisquam amet ab quae consequatur, animi numquam at voluptatibus laudantium.
                   </Typography>
                </Card>
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
               <Card 
                    variant='outlined'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: 4,
                    }}
                >
                   <Typography 
                        component={'div'} 
                        display={'flex'} 
                        justifyContent="center" 
                       
                        flexDirection={'column'}
                        color='#154266'
                    >
                         <DesktopMacOutlinedIcon sx={{fontSize: 64}}/>
                         <Typography 
                            fontWeight={600} 
                            variant='h6'
                         >
                            Desktop Applications
                        </Typography>
                   </Typography>
                   <Typography variant='body1' color="#59626c" fontSize={18}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Non nostrum libero ipsa voluptatum repellat, accusantium sapiente est 
                     natus distinctio sit quisquam amet ab quae consequatur, animi numquam at voluptatibus laudantium.
                   </Typography>
                </Card>
            </Grid>
            
        </Grid>
    </Box>
  )
}
