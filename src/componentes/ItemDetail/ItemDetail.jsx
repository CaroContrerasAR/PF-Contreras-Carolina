import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { Link } from 'react-router-dom';

// primer paso: IMPORTEMOS

import {CarritoContext} from "../../context/CarritoContext";
import { useContext } from 'react';

const ItemDetail = ({id, nombre, precio, img, detalle, stock}) => {
    const [agregarCantidad,setAgregarCantidad] =  useState(0);

    //useContext
    const {agregarProducto} = useContext(CarritoContext);
    //

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        // console.log("Productos agregados: " + cantidad);

        //
        const item = {id, nombre, precio};
        agregarProducto(item, cantidad);
    }

    return (
        <div className="main-container">
            <img src={img} alt={nombre} />
            <div className="detail">
                <h1> {nombre} </h1>
                <h4>ID: {id} </h4>
                <p>{detalle}</p>
                <h3><strong>Precio: ${precio}</strong> </h3>
                {
                    //Acá empleamos la logica de montaje y desmontaje de componentes

                }
                {
                    agregarCantidad > 0 
                    ? (<>
                        <Link to="/" >Seguir Comprando</Link><br />
                        <Link to="/cart">Terminar Compra</Link>    
                        </>) 
                    : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
                }
            </div>
        </div>
    )
}

export default ItemDetail