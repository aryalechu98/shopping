import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButtom from '@mui/material/IconButton'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstatgramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import RoomIcon from '@mui/icons-material/Room'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import  CardMedia from '@mui/material/CardMedia'
const Footer = () => {
    const items=[{id:'1',itemsName:'Home'},{id:'2',itemsName:'Men Fashion'},{id:'3',itemsName:'Women Fashion'},{id:'4',itemsName:'Accessories'},{id:'5',itemsName:'Order Tracking'},{id:'6',itemsName:'Wishlist'},{id:'7',itemsName:'Terms & Conditions'}]
    return (
  <footer>
    <Box sx={{
        bgcolor:'#0B2647'
    }}>
        <Container maxWidth='lg'>
             <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1} color='#fff'>
                         <Typography variant='h1' sx={{
                            color:'#fff',
                            padding:{xs:'1rem 0rem'},
                            fontSize:{xs:'1.10rem',md:'1.30rem'},fontWeight:'500'}}>
                            SHOPIE
                         </Typography>
                    </Box>
                    <Box>
                        <Typography color='#A8943D'
                         letterSpacing='3px' sx={{margin:'50px 0', fontSize:{xs:'0.80rem',md:'0.90rem'},fontWeight:'500'}}>
                            There are many variations of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </Typography>
                    </Box>
                    <Box >
                            <IconButtom sx={{color:'#fff'}}>
                                <FacebookIcon/>
                            </IconButtom>
                            <IconButtom sx={{color:'#fff'}}>
                                <InstatgramIcon/>
                            </IconButtom>
                            <IconButtom sx={{color:'#fff'}}>
                                <GitHubIcon/>
                            </IconButtom>
                            <IconButtom sx={{color:'#fff'}}>
                                <TwitterIcon/>
                            </IconButtom>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1} color='#A8943D'>
                         <Typography variant='h1' sx={{
                            color:'#A8943D',
                            padding:{xs:'1rem 0'},
                            fontSize:{xs:'1.10rem',md:'1.30rem'},fontWeight:'500'}}>
                            Useful Links
                         </Typography>
                    </Box>
                    <Box sx={{padding:{xs:'0',md:'2rem 0'}}}>
                        <List sx={{display:'flex',flexWrap:'wrap',color:'#fff',
                     fontSize:{xs:'0.80rem',md:'0.90rem'},fontWeight:'500'
                    }}>
                            {items.map((item)=>{
                                 return <ListItem key={item.id}>{item.itemsName}</ListItem>
                            })}
                        </List>
                    </Box>

                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1} color='#A8943D'>
                         <Typography variant='h1' sx={{
                            color:'#A8943D',
                            padding:{xs:'1rem 0rem'},
                            fontSize:{xs:'1.10rem',md:'1.30rem'},fontWeight:'500'}}>
                            Contact
                         </Typography>
                    </Box>
                    <Box padding={'3.5rem 0'}
                        
                    >
                        <Typography
                            color='#fff'
                            marginBottom='10px'
                            marginTop={'-12px'}
                            display={'flex'}
                            alignItems='center'
                            gap='10px'
                            sx={{ fontSize:{xs:'0.80rem',md:'0.90rem'},fontWeight:'500'}}
                            
                         >
                            <RoomIcon/>622 Dixie Path,South Tobinchester 98336
                        </Typography>
                        <Typography
                            color='#fff'
                            marginBottom='10px'
                            display={'flex'}
                            alignItems='center'
                            gap='10px'
                            sx={{ fontSize:{xs:'0.80rem',md:'0.90rem'},fontWeight:'500'}}
                        >
                            <PhoneIcon/>+1 234 56 78
                        </Typography>
                        <Typography
                            color='#fff'
                            marginBottom='10px'
                            display={'flex'}
                            alignItems='center'
                            gap='10px'
                            sx={{ fontSize:{xs:'0.80rem',md:'0.90rem'},fontWeight:'500'}}
                            >
                                <EmailIcon/>contact@shopie.dev
                        </Typography>
                        <CardMedia
                            component='img'
                            alt='pic'
                            image='https://i.ibb.co/Qfvn4z6/payment.png'
                            sx={{width:{xs:'50%',sm:'90%',md:'60%'},marginTop:{xs:'2rem',}}}
                        />
                    </Box>
                </Grid>
             </Grid>
        </Container>
    </Box>
  </footer>
  )
}

export default Footer