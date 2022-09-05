import React from 'react'
import {Stack,Typography} from '@mui/material'

const Announcement = () => {
  return (
    <>
    <Stack direction={'row'} alignItems='center' justifyContent={'center'} 
    
    backgroundColor='#041121' color='#fff'  sx={{padding:{xs:'0.25rem',lg:'0.5rem'}}}>
        <Typography fontWeight='500'>
            Super Deal! Free Shipping on Order over $50
        </Typography>
    </Stack>
    </>
  )
}

export default Announcement