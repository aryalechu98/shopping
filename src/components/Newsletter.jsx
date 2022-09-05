import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import  TextField  from '@mui/material/TextField'
import Box from '@mui/material/Box'
import SendIcon from '@mui/icons-material/Send'
import Button from '@mui/material/Button'
const Newsletter = () => {
  return (
    <Container sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:'2rem',
    }}>
        <Typography variant='h1' 
               fontWeight={'400'}
               letterSpacing='1px'
               color='#041121' sx={{fontSize:{xs:'70px'}}}
        >
            Newsletter
        </Typography>
        <Typography 
        variant='subtitle1'
        color='#A8943D' 
        fontWeight={'500'} 
        letterSpacing='3px' 
        sx={{margin:'50px 0',
        textAlign:"center",
        }}>
            Get timely upadates from your favorite products
            </Typography>
        <Box sx={{
            width:'50%',
            display:'flex',
            justifyContent:'space-between',
           alignItems:'center',
            marginBottom:'4rem',
        }}>
            <TextField 
                label='Your Email'
               
                variant='outlined'
                
               sx={{width:'100%',
                   
            }}
            /> 
            <Button
            sx={{color:'#fff',backgroundColor:'#041121',borderRadius:'0',cursor:'pointer',
            height:'100%',
            padding:'15px 20px','&:hover':{color:'#041121',border:'1px solid #041121',fontWeight:'600'}}}
            >
                <SendIcon/>
            </Button> 
        </Box>
        
    </Container>
  )
}

export default Newsletter