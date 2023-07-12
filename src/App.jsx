import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Footer from './componentes/Footer/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import Cart from './componentes/Cart/Cart'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <CarritoProvider>
      <NavBar/>
        <Routes>
          <Route path="/" element={ <ItemListContainer/> } />
          <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> }/>
          <Route path="/item/:idItem" element={ <ItemDetailContainer/> }/>
          <Route path='/cart' element={<Cart/>} />
          <Route path="*" element={ <h2>Sitio en construcción, vuelva mas tarde</h2> }/>
        </Routes>
      </CarritoProvider>
    </BrowserRouter>
    
    <Footer/>  
    </>
  )
}

export default App