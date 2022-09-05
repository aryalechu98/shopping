import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import {Link} from 'react-router-dom'

const CategoryItem = ({item}) => {
  return (
    <Card sx={{maxWidth:345, height:'500px',}}>
        <CardContent sx={{position:'relative',
             display:'flex',
            
             
            }}>
            <CardMedia
                component='img'
                alt='pic'
                image={item.img}
                width='100%'
                height={'100%'}
                sx={{objectFit:'cover'}}
                
            />
            <Typography
                variant='h3' 
                fontWeight={400}
                textAlign='center'
                marginBottom={'20px'}
                color='#FFF' 
                sx={{
                position:'absolute',
                bottom:'8rem',
                fontWeight:'bold',
                paddingLeft:'10px',
                fontSize:{xs:'1.5rem',md:'1.75rem'}
                }}
            >
                {item.title}
            </Typography>
        <CardActions
                sx={{
                    position:'absolute',
                    bottom:'5rem',
                }}        
        >
         <Link to='productList' style={{textDecoration:'none'}}>
            <Button size='small'
                sx={{color:'#041121',border:'1px solid #041121',backgroundColor:'#fff',fontWeight:'600',cursor:'pointer',padding:'10px 20px','&:hover':{color:'#fff',backgroundColor:'#041121'}}}
            >Shop Now</Button>
        </Link>
        </CardActions>
        </CardContent>
    </Card>
  )
}

export default CategoryItem