//import ItemCount from '../ItemCount/ItemCount'


//despues se agrega stock como props
const ItemDetail = ({id, nombre, precio, img}) => {
  
    // const [agregarCantidad,setAgregarCantidad]= useState(0);

    // const manejadorCantidad = () => {
    //     setAgregarCantidad(cantidad);
    //     console.log("Productos agregados: " + cantidad);
    // }

    return (
        <div>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>ID: {id}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, officia ea ullam et, beatae itaque facere alias neque dolorum tempore consequuntur cupiditate dolorem nulla. Est earum officia nam placeat ducimus!</p>
            <img src={img} alt={nombre} />
        </div>
    )
}

export default ItemDetail