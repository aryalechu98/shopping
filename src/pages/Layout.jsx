import React from 'react'
import styled from 'styled-components'
import {MdArrowLeft,MdArrowRight} from 'react-icons/md'
import {Typography,Button} from '@mui/material'
import { useState } from 'react'
import { sliderItems } from '../data'
import { Link } from 'react-router-dom'

import Hidden from '@mui/material/Hidden'
import './Layout.scss'

const Container=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden;
    z-index:1;
`
const Arrow=styled.div`
width:50px;
height:50px;
background-color:#F4F4F4;
color:#0B2647;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
position:absolute;
top:0;
bottom:0;
left:${props=>props.direction ==='left' && '10px'};
right:${props=>props.direction === 'right' && '10px'};
margin:auto;
z-index:2;
`
const Wrapper=styled.div`

height:100%;
display:flex;
transition:all 1.5s ease;
transform:translateX(${props=>props.slideIndex * -100}vw);

`
const Slide= styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:#${props=>props.bg};
`
const ImgContainer=styled.div`
flex:1;
margin-top:${(props)=>props.mt};
`
const Image=styled.img`
height:80%;
width:80%;
margin-left:${(props)=>props.ml};
`
const InfoContainer=styled.div`
flex:1;
padding:50px;
`


const Slider = () => {
    const [slideIndex,setSlideIndex]=useState(0);
    const handleClick=(direction)=>{
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    }
  return (
    
   <Container className='container'>
        <Arrow className='font-arrow' direction='left' onClick={()=>{handleClick('left')}}>
            <MdArrowLeft fontSize='25px'/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>{
               return (
                 <Slide bg={item.bg} key={item.id} >
               <ImgContainer mt={item.mt}>
                <Hidden mdDown>
               <Image ml={item.ml} src={item.img} alt={item.title}/>
               </Hidden>
               </ImgContainer>
               <InfoContainer>
               <Typography className='font-title' variant='h1' 
               fontWeight={'400'}
               color='#041121' sx={{fontSize:{xs:'70px'}}}>{item.title}</Typography>
               <Typography className='font-para' color='#A8943D' fontWeight={'500'} letterSpacing='3px' sx={{margin:'50px 0'}}>{item.desc}</Typography>
               <Link to='productList' style={{textDecoration:'none'}}>
               <Button className='font-btn' sx={{color:'#fff',backgroundColor:'#041121',cursor:'pointer',padding:'10px 20px','&:hover':{color:'#041121',border:'1px solid #041121',fontWeight:'600'}}} 
               >SHOP NOW</Button>
               </Link>
               </InfoContainer>
           </Slide>
          
            )})}
            
            

        </Wrapper>
        <Arrow className='font-arrow' direction='right' onClick={()=>{handleClick('right')}}>
           <MdArrowRight fontSize='25px'/>
        </Arrow>

   </Container>

  )
}

export default Slider