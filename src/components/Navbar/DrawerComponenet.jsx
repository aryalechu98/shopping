import React from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { useSelector,useDispatch } from 'react-redux'
import { drawerActions } from '../../store/drawer-slice'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'
import './Header.css'
const DrawerComponenet = () => {
    const dispatch=useDispatch()
    const open=useSelector(state=>state.drawer.open)
    // console.log(open)
    const menuHandler=()=>{
        dispatch(drawerActions.setOpen())
    }
  return (
    <SwipeableDrawer open={open} onOpen={menuHandler} onClose={menuHandler} >
      <div className='flex'>
        <Link to='register' style={{textDecoration:'none',marginLeft:'auto',width:'100%'}}>
        
              <Button variant='text'
              sx={{color:'#041121',textAlign:'center',width:'100%'}}>HOME</Button>
            </Link>
         <Link to='register' style={{textDecoration:'none',width:'100%'}}>
        
              <Button variant='text'
              sx={{color:'#041121',textAlign:'center',width:'100%'}}>Register</Button>
            </Link>
            <Link to='signin' style={{textDecoration:'none',width:'100%'}}>
        
              <Button variant='text'
              sx={{color:'#041121',textAlign:'center',width:'100%'}}>Sign In</Button>
            </Link>
      </div>
    </SwipeableDrawer>
  )
}

export default DrawerComponenet