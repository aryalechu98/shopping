import React from 'react'
import Box from '@mui/material/Box'
import Typograpghy from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useDispatch ,useSelector} from 'react-redux'
import { authActions } from '../store/auth-slice'
import {useNavigate} from 'react-router-dom'

const SignIn = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    
    const isLogin=useSelector(state=>state.auth.isLogin)
    console.log('login ', isLogin)
   const inputs=useSelector(state=>state.auth.inputs)
   
    const handleChange=(e)=>{
        
    dispatch(authActions.setInputs({...inputs,[e.target.name]:e.target.value}
        
        ))
        

    }
    const logHandler=()=>{
        dispatch(authActions.setIsLoginClicked())

        dispatch(authActions.setIsLoging())
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
       
        dispatch(authActions.setIsLoginClicked())
        navigate("/")
        // console.log(e)
        // dispatch(authActions.onSubmit())
        

    }
   
  return (
    <>
     
    <form onSubmit={handleSubmit}>
         <Box 
       
        display={'flex'} flexDirection='column' 
        justifyContent={'center'}
        alignItems='center'
        margin='auto'
        marginTop={'5rem'}
        padding={3}
        borderRadius={5}
        maxWidth={400}
        boxShadow={'5px 5px 10px #ccc'}
        sx={{':hover':{
            boxShadow:'10px 10px 20px #ccc'
        }}}
        >
            <Typograpghy
             variant='h2' 
             padding={3} 
             textAlign={'center'}
             >
              {!isLogin ? 'Sign Up': 'Login'}
            </Typograpghy>
          {!isLogin && <TextField
          name='name'
          onClick={handleSubmit}
          onChange={handleChange}
          margin='normal' type={'text'} variant='outlined' placeholder='Name' />}  
            <TextField margin='normal'
            name='email'
            value={inputs.email}
            onChange={handleChange}
            type={'email'} variant='outlined' placeholder='Email'/>
            <TextField margin='normal' 
            name='password'
            value={inputs.password}
            onChange={handleChange}
            type={'password'} variant='outlined' placeholder='Password'/>
            
                <Button
                
                type='submit'
                variant='contained' sx={{
                    background:'#041121',
                    transition:'all 0.5s ease',
                    borderRadius:3,
                    marginTop:'1rem',
                    fontWeight:'bold',
                    ':hover':{
                        background:'white',
                        color:'#041121',
                        transform:'scale(1.03)'
                    }
                }}>{!isLogin ? 'SIGN UP' : 'LOGIN'}</Button>
               
                        <Button 
                        onClick={logHandler}
                        sx={{
                marginTop:'1rem',borderRadius:3,
                }}>
                Change to {!isLogin ? 'LOGIN' : 'SIGN UP'}
                        </Button>
            

        </Box>
    </form>
    </>
  )
}

export default SignIn