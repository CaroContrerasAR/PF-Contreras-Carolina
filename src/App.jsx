import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Footer from './componentes/Footer/Footer'

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"¡¡ Bienvenidos a la Tienda EXPRESS !!"} />
    <ItemDetailContainer/>
    <Footer/>  
    </>
  )
}

export default App