
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'

import SignIn from './pages/SignIn'
import Cart from './pages/Cart/Cart'
import ProductList from './pages/ProductList'
const App = ()=>{
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='layout' element={<Home/>}/>

      
        <Route path='signin' element={<SignIn/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='productlist' element={<ProductList/>}/>
      </Routes>
      
    </Router>
  )
}
export default App