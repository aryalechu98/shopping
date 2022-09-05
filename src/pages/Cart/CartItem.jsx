import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import  CardContent  from '@mui/material/CardContent'
import  Typography  from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cartSlice'
import { useSelector } from 'react-redux'

const CartItem = ({totalPrice,title,id,price,quantity}) => {
  const itemsList=useSelector(state=>state.cart.itemsList)

  const dispatch=useDispatch()
 const addToCartHandler=()=>{
  dispatch(cartActions.addToCart({
    title,
    id,
    price,
  }))
 }
 const removeFromCartHandler=()=>{
  dispatch(cartActions.removeFromCart(id))
 }
  return (
   <Container sx={{display:'flex',flexDirection:'column'}}>
     <Card
       sx={{
          minWidth:'300px',
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
          marginLeft:'auto',
     }}>
        <Box
          sx={{
            display:'flex',
            flexDirection:{xs:'row',md:'row'},
            alignItems:'center',
            justifyContent:'center',
            }}>
          <CardContent
            sx={{
              display:'flex',
              flexDirection:{xs:'column',sm:'row'},
              justifyContent:'left',
              alignItems:'center',
              gap:{xs:'1rem',md:'2rem'},
              width:'100%',
              height:'100%',
            }}
          >
            <Typography
              sx={{
                width:'350px',
                color:"#0B2647",
                fontSize:{xs:'1.10rem',md:'1.5rem'},
              }}
            >
              <em>{title}</em>
     
            </Typography>
            <Typography
             sx={{
              color:"#0B2647",
              fontSize:{xs:'1.10rem',md:'1.5rem'},
            }}
            >
             Price: <span style={{color:'#A8943D'}}>${price}</span>
            </Typography>
            <Typography
             sx={{
              color:"#0B2647",
              fontSize:{xs:'1.10rem',md:'1.5rem'},
              fontWeight:'bold'
            }}
            >
              Total  <span style={{color:'#A8943D'}}>${totalPrice}</span>
            </Typography>
            <Button
            onClick={removeFromCartHandler}
             sx={{
              color:"#fff",
              background:'#0B2647',
              fontSize:'1rem',
              ':hover':{
                border:'1px solid #0B2647',
                background:'#fff',
                color:'#0B2647',
              }
            }}
            >-</Button>
            <Typography
             sx={{
              color:"#0B2647",
              fontSize:{xs:'1.10rem',md:'1.5rem'},
            }}
            >{quantity}</Typography>
            <Button
            onClick={addToCartHandler}
              sx={{
                color:"#fff",
                background:'#0B2647',
                fontSize:'1rem',
                
                ':hover':{
                  border:'1px solid #0B2647',
                  background:'#fff',
                  color:'#0B2647',
                }
              }}
     
            >+</Button>
          </CardContent>
       </Box>
     
     </Card>
    
   </Container>
  )
}

export default CartItem