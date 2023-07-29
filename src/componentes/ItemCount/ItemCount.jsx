import { useState } from "react";

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
          <div className="contador">
            <button onClick={decrementar}> - </button>
            <p> {contador} </p>
            <button onClick={incrementar}> + </button>
          </div>
          <button onClick={()=>funcionAgregar(contador) }> Agregar al Carrito </button>
          <p>Disponible : {stock}</p>
        </>
    )
}

export default ItemCount