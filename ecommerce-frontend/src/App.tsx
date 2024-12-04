import React from 'react'

import {BrowserRouter as Router,Route,Routes, Outlet} from 'react-router-dom'

import Cart from './pages/Cart'
import Search from './pages/Search'
import Header from './components/Header'
import Shipping from './pages/Shipping'
import Login from './pages/Login'
import { SiHomepage } from 'react-icons/si'
import HomePage from './pages/HomePage'
import ProductDetails from './pages/ProductDetails'
import ProductManagement from './pages/admin/ProductManagement'
import Dashboard from './pages/admin/Dashboard'
import NewProduct from './pages/admin/NewProduct'
import UpdateProduct from './pages/admin/UpdateProduct'




const App = () => {

  const AdminLayout=()=>{
    return(

      
          <Dashboard/>
    )

  }

  const Layout=()=>{
  
    return(
      <div>
      <Header/>
      <Outlet/>
      </div>
  
    )
  
  }



  return (

   <Router>
    {/* <Header/> */}
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage/>} />
      <Route path="/search" element={<Search/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>

</Route>
      {/* Nt logged in route */}
      <Route path="/login"  element={<Login/>}/>
      <Route path="/shipping" element={<Shipping/>}/>

      <Route path="/admin/dashboard" element={<AdminLayout/>}>
      <Route index element={<ProductManagement/>}/>

     
      <Route path="newproduct"  element={<NewProduct/>}/>
      <Route path="updateproduct/id"  element={<UpdateProduct/>}/>
      {/* <Route path="updateproduct/id"  element={<UpdateProduct/>}/> */}


      </Route>

    </Routes>

   </Router>
    
  )
}

export default App