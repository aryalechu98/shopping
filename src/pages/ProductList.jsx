import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import  Select  from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import Announcement from '../components/Navbar/Announcement'
import Header from '../components/Navbar/Header'
import Footer from '../components/Footer'
import {useNavigate} from 'react-router-dom'

import  MenuItem  from '@mui/material/MenuItem'
import { useSelector ,useDispatch} from 'react-redux'
import { productListAction } from '../store/productListSlice'
import Products from '../components/Products/Products'
const ProductList = () => {
  const navigate=useNavigate();

  const sort=useSelector(state=>state.productList.sort)
  const filter=useSelector(state=>state.productList.filter)
  const sizeState=useSelector(state=>state.productList.size)
  const dispatch=useDispatch()
  const handleChange=(e)=>{
    dispatch(productListAction.setSort(e.target.value))
  }
  const filterHandle=(e)=>{
    dispatch(productListAction.setFilter(e.target.value))
  }
  const sizeHandle=(e)=>{
    dispatch(productListAction.setSize(e.target.value))
  }

  const color=[{id:'1',colorName:'White'},{id:'2',colorName:'Black'},{id:'3',colorName:'Red'},{id:'4',colorName:'Blue'},{id:'5',colorName:'Yellow'},{id:'6',colorName:'Green'}]
    const size=[{id:'1',sizeName:'XS'},{id:'2',sizeName:'S'},{id:'3',sizeName:'M'},{id:'4',sizeName:'L'},{id:'5',sizeName:'XL'},{id:'6',sizeName:'XXL'}]
  return (
    <div>
      <Announcement/>
      <Header/>
        <Container sx={{margin:'5rem 0 4rem 0'}}>
          <Box>
          <Typography variant='h2'
          margin={'20px'}
                 fontWeight={'400'}
                 color='#041121' sx={{fontSize:{xs:'70px'}}}>Dresses</Typography>
          </Box>
          <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'row'}}}>

            <Box sx={{m:2, minWidth:120,display:'flex', flexDirection:'row',gap:'10px',alignItems:'center',
            
          }}>
              <Typography
                sx={{color:'#A8943D',fontWeight:'bold',
                fontSize:'18px'
              }}
              >Filter Products:</Typography>
            
              <Box sx={{display:'flex'}}>
                <Select
                value={filter}
                displayEmpty
                onChange={filterHandle}
                sx={{border:'1px solid #0B2647',
                ':hover':{border:'1px solid #fff',}
                            }}
                >
                  <MenuItem disabled selected value=''>
                    <em>Color</em>
                  </MenuItem>
                      {color.map(item=>{
                      return <MenuItem value={item.colorName} key={item.id}>{item.colorName}</MenuItem>
                      })}
                </Select>
                <Box sx={{marginLeft:'1rem'}}>
                  <Select
                  value={sizeState}
                  displayEmpty
                  onChange={sizeHandle}
                  sx={{border:'1px solid #0B2647',
                  ':hover':{border:'1px solid #fff',
                  marginLeft:'auto'
                                }
                  }}
                  >
                    <MenuItem disabled selected value=''>
                      <em>Size</em>
                    </MenuItem>
                        {size.map(item=>{
                        return <MenuItem value={item.sizeName} key={item.id}>{item.sizeName}</MenuItem>
                        })}
                  </Select>
                  
                </Box>
              </Box>
            </Box>
            <Box sx={{m:2, minWidth:120,display:'flex', flexDirection:'row',gap:'10px',alignItems:'center',
            marginLeft:{sx:'0',md:'auto'}
          }}>
              
                <Typography
                  sx={{color:'#A8943D',fontWeight:'bold',
                  fontSize:'18px'
                }}
                >Sort Products:</Typography>
                <Select
                value={sort}
                displayEmpty
                onChange={handleChange}
                sx={{maxWidth:'350px',border:'1px solid #0B2647',
                ':hover':{border:'1px solid #fff'}
                            }}
                >
                  <MenuItem value=''>
                    <em>Newest</em>
                  </MenuItem>
                  <MenuItem value='lowtohigh'>Price -- Low to High</MenuItem>
                  <MenuItem value='hightolow'>Price -- High to Low</MenuItem>
                </Select>
              </Box>
                           
          </Box>
          <Products/>
        </Container>
        
      <Footer/>
    </div>
  )
}

export default ProductList