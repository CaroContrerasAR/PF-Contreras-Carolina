import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import Footer from './componentes/Footer/footer'

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"¡¡ Bienvenidos a la Tienda EXPRESS !!"} />
    <Footer/>  
    </>
  )
}

export default App