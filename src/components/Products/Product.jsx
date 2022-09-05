import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cartSlice'

export default function Product({title,image,brand,price,id}) {

  const dispatch=useDispatch()
  const addToCartHandler=()=>{
    dispatch(cartActions.addToCart({
      title,
      id,
      price,
    }))
  }
  return (
    <Grid item xs={12} sm={6} md={3} >
      <Card sx={{ maxWidth: 345 ,height:'460px',
      padding:'1rem'
    }}>
        <CardMedia
          component="img"
          alt="product"
          height="240"
          image={image}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"
          sx={{
            fontSize:{xs:'0.85rem',
            fontWeight:'bold',
            color:'#CCC',
            letterSpacing:'2px'
          }
          }}
          >
           <em>{brand}</em> 
          </Typography>
          <Typography gutterBottom variant="h5" component="div"
          sx={{
            fontSize:{xs:'1.5rem',md:'1.20rem'},
            color:'#0B2647'
          }}
          >
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div"
          color='#0B2647'
          sx={{
            fontSize:{xs:'1rem',md:'1rem',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center'
          },
          
          }}
          >
          <em> offer price</em>
          <span style={{
            color:'#A8943D',
            fontWeight:'bold',

          }}>$ {price}</span>
          </Typography>
          
        </CardContent>
        <CardActions>
        <Button 
        onClick={addToCartHandler}
        size='small'
                sx={{
                  color:'#fff',backgroundColor:'#041121',
                  fontWeight:'600',cursor:'pointer',padding:'5px 20px','&:hover':{
                  color:'#041121',border:'1px solid #041121',backgroundColor:'#fff',
                  }}}
            >Add To Cart</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
