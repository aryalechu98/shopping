import React from 'react'
import CartItem from './CartItem'
import Header from '../../components/Navbar/Header'
import Footer from '../../components/Footer'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import  Typography  from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'


const Cart = () => {
  const navigate=useNavigate();

  const itemsList=useSelector(state=>state.cart.itemsList)
 
  let total=0;
  itemsList.forEach(item=>
  {
    total+=item.totalPrice;

  })
  return (
    <div>
      <Header/>
    <Container sx={{margin:'10rem 0',display:'flex',flexDirection:'column',position:'relative'}}>
      <Grid container spacing={3}>
        {itemsList.map(item=>{
          return (
            <Grid item key={item.id} sx={{display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'auto'}}>
              <Box>
                <CartItem
                    
                   
                   quantity={item.quantity} 
                   title={item.title}
                   price={item.price}
                   id={item.id}
                   totalPrice={item.totalPrice}
                
                />
                </Box> 
            </Grid>
          )
        })}
      </Grid>
      <Box 
      sx={{
        textAlign:'right',
        margin:'1.5rem 1rem 0 0 '
        }}
      >
        <Typography
          sx={{
            color:"#0B2647",
            fontSize:'1.20rem',
            fontWeight:'bold'
          }}    
        >
        Total :
          <span style={{
            color:'#A8943D'
          }}> 
             { ` $${total}`}
        </span>
        </Typography>
    <Button 
       
        size='small'
                sx={{
                  margin:'1rem 0',
                  color:'#fff',backgroundColor:'#041121',
                  fontWeight:'600',cursor:'pointer',padding:'5px 20px','&:hover':{
                  color:'#041121',border:'1px solid #041121',backgroundColor:'#fff',
                  }}}
            >Place order</Button>
   </Box>
    </Container>

    <Footer/>
    </div>
  )
}

export default Cart