//@ts-nocheck
import { Box, Grid, Typography , Card, Avatar } from '@mui/material'
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
                RickSide Technologies sole focus is on software application development as a service in finding solutions to 
                business objectives, goals and problem encountered in running it. Through automating several processes, building secure, user friendly
                and scalable software application products, we are able to meet a client's demands and preferences.
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
                        <Avatar sx={{ bgcolor: '#e8ecf0', width:70, height: 70 }}>
                            <LanguageOutlinedIcon  sx={{fontSize: 84, color: '#154266', p: 2,}}/>
                        </Avatar>
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
                         <Avatar sx={{ bgcolor: '#e8ecf0', width:70, height: 70 }}>
                            <PhoneIphoneOutlinedIcon  sx={{fontSize: 84, color: '#154266', p: 2,}}/>
                        </Avatar>
                         
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
                        <Avatar sx={{ bgcolor: '#e8ecf0', width:70, height: 70 }}>
                            <DesktopMacOutlinedIcon  sx={{fontSize: 84, color: '#154266', p: 2,}}/>
                        </Avatar>
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
