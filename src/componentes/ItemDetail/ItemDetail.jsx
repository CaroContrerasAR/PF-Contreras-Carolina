//import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

//despues se agrega stock como props
const ItemDetail = ({id, nombre, precio, img, art, detalle}) => {
  
    // const [agregarCantidad,setAgregarCantidad]= useState(0);

    // const manejadorCantidad = () => {
    //     setAgregarCantidad(cantidad);
    //     console.log("Productos agregados: " + cantidad);
    // }

    return (
        <div className="main-container">
            <img src={img} alt={nombre} />
            <div className="detail">
                <h1> {nombre} </h1>
                <h4>Art.: {art}</h4>
                <p>{detalle}</p>
                <h3><strong>Precio: ${precio}</strong> </h3>
            </div>
        </div>
    )
}

export default ItemDetail