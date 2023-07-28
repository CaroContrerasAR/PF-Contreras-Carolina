import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({productos}) => {
  return (
    <div className='contenedorProductos'>
        { 
        productos.length >0 
        ? productos.map(prod => <Item key={prod.id} {...prod}/>)
        : <p className="pInicial">Cargando ...</p>
        }
    </div>
  )
}

export default ItemList