import React from 'react'
import {popularProducts} from '../../data'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Product from './Product'
const Category = () => {
  
  return (
   <Container sx={{marginLeft:{xs:'2.5rem',sm:'0.5rem',lg:'2rem'}}}>
     <Box sx={{margin:'auto'}}>
       <Grid container  spacing={4} alignItems="center" justifyContent={'center'}>
        {popularProducts.map(data=>(
          <Product
            title={data.title}
            image={data.img}
            brand={data.brand}
            price={data.price}
            id={data.id}
          />
        ))}
       </Grid>
     </Box>
   </Container>
  )
}

export default Category