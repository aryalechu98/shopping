import React from 'react'
import AppBar from '@mui/material/AppBar'
import  Badge  from '@mui/material/Badge'
import Toolbar from '@mui/material/Toolbar'
import  ShoppingCartOutlined  from '@mui/icons-material/ShoppingCartOutlined'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Button from '@mui/material/Button'
import './Header.css'
import { Link } from 'react-router-dom'
import Hidden from '@mui/material/Hidden'
import DrawerComponenet from './DrawerComponenet'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { drawerActions } from '../../store/drawer-slice'
import { useDispatch, useSelector } from 'react-redux'
import Announcement from './Announcement'
import { authActions } from '../../store/auth-slice'
import {useNavigate} from 'react-router-dom'


const Header = () => {
  const navigate=useNavigate();

  const dispatch=useDispatch()
  const isLoginClicked=useSelector(state=>state.auth.isLoginClicked)
  const menuHandler=()=>{
    dispatch(drawerActions.setOpen())
  }
  const registerHandler=()=>{
    dispatch(authActions.setIsLoginClicked())
    dispatch(authActions.setIsLoging())
    navigate("/")
  }
const quantity=useSelector(state=>state.cart.totalQuantity);
  return (
    <Paper style={{position:'fixed',zIndex:'2'}}>
      <AppBar className='appbar' sx={{background:'#F4F4F4',}} >
        <Announcement/>
        <Toolbar sx={{margin:'0 1rem '}}>
          <Link to='cart' style={{textDecoration:'none'}}>
            <Badge badgeContent={quantity} sx={{color:'#041121'}}>
            <ShoppingCartOutlined sx={{color:'#041121'}}/>
          </Badge>
          </Link>
          <Link  to='/' style={{marginLeft:'auto',textDecoration:'none'}}>
            <Typography  sx={{color:'#A8943D',fontSize:{xs:'1.25rem',sm:'1.5rem',md:'2rem'}}}>
              SHOPIE
              </Typography>
          </Link>
          <Hidden smDown>
         <Link to='signin' 
          onClick={registerHandler}
          style={{textDecoration:'none',marginLeft:'auto'}}>
            
            <Button variant='text' 
            sx={{color:'#041121',fontSize:{xs:'0.50rem',sm:'1rem',}}}>Register</Button>
          </Link>
 <Link to='signin' style={{textDecoration:'none'}}>
            
            <Button variant='text' 
            
            sx={{color:'#041121',fontSize:{xs:'0.50rem',sm:'1rem',}}}>
              { isLoginClicked ? 'LOGOUT':'SIGN IN'}

            </Button>
          </Link>
{}
          </Hidden>
          <Hidden smUp>
            <IconButton onClick={menuHandler}>
              <MenuIcon  />
            </IconButton>
          </Hidden>
        </Toolbar>
          <DrawerComponenet/>
      </AppBar>
    </Paper>
  )
}

export default Header