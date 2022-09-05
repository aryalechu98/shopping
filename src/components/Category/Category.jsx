import React from 'react'
import {categories} from '../../data'
import Container from '@mui/material/Container'
import CategoryItem from './CategoryItem.jsx'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
const Category = () => {
  return (
    <Container 
    sx={{padding:'2rem 0'}}
    >
       
            <Grid container spacing={2}>
                {categories.map(item=>{
                    return (
                        
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Box sx={{display:'flex',justifyContent:"center",alignItems:'center'}}>
                            <CategoryItem item={item} key={item.id} />
                            </Box>
                        </Grid>
                       
                    )
                })}
            </Grid>
       
    </Container>
  )
}

export default Category