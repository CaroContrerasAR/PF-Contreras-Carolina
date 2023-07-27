import {useState, useContext} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { db } from '../../services/config';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';

const Checkout = () => {
        const [nombre, setNombre] = useState("");
        const [apellido, setApellido] = useState("");
        const [telefono, setTelefono] = useState("");
        const [email, setEmail] = useState("");
        const [emailConfirmacion, setEmailConfirmacion] = useState("");
        const [error, setError] = useState("");
        const [ordenId, setOrdenId] = useState("");

        const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

        //Funciones y validaciones:

        const manejadorFormulario = (event) => {
          event.preventDefault();

          //verificamos que los campos esten completos
          if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos");
            return;
          }

          //Validamos que todos los campos del mail coincidan
          if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden!");
            return;
          }

          //Paso 1: Creamos un objeto con todos los datos de la orden de compra

          const orden = {
            items: carrito.map(producto => ({
              id: producto.item.id,
              nombre: producto.item.nombre,
              cantidad: producto.cantidad,
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
          };

          //Vamos a modficar el codigo para que ejecute varias promesas en paralelo, por un lado que actualice stock de producto y por otro que genere una orden de compra."Promise.all ( )" me permite esto.

          Promise.all(
            orden.items.map(async (productoOrden) =>{
              const productoRef = doc(db, "productos", productoOrden.id);
              //Por cada producto en la collecion Productos obtengo una refenrencia, y a partir de esa referencia obtengo el doc.
              const productoDoc = await getDoc(productoRef);
              const stockActual = productoDoc.data().stock;
              //Data es un metodo que me permite acceder a la informacion del documento.
              await updateDoc(productoRef, {
                stock: stockActual - productoOrden.cantidad,
              })
              //Modifico el stock y subo la Informacion actualizada.
            })
          )
            .then( ( ) => {
              //Guardamos la orden en la base de datos
              addDoc(collection(db,"ordenes"), orden)
                .then((docRef) => {
                  setOrdenId(docRef.id);
                  vaciarCarrito();
                })
                .catch((error)=> {
                  console.log("Error al crear la orden",error);
                  setError("Error al crear la orden, por favor vuelva a intentarlo...!!");
                })
            })
            .catch((error)=>{
              console.log("No se pudo actualizar el stock",error);
              setError("No se puede actualizar el stock, por favor vuelva a intentarlo en unos minutos");
            })
         
        }

    return (
    <div>
        <h2> Checkout </h2>
        <form onSubmit={manejadorFormulario}>
            {
                carrito.map (producto => (
                    <div key={producto.item.id}>
                        <p> {producto.item.nombre} x {producto.cantidad} unidades </p>
                        <p> Precio por Unidad {producto.item.precio}</p>
                        <img src={producto.item.img} alt={producto.item.nombre} />
                        <hr />
                    </div>
                ))
            }
            <p>Cantidad de Prendas en el Carrito: {cantidadTotal}</p>
            <h2>Total Compra: $ {total}</h2>
            <hr />

            <div className="form-group">
                <label htmlFor=""> Nombre </label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            
            <div className="form-group">
                <label htmlFor=""> Apellido </label>
                <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor=""> Telefono </label>
                <input type="text"  value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor=""> Email </label>
                <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor=""> Email Confirmacion </label>
                <input type="email"  value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
            </div>

            {
                error && <p style={{ color: "red" }}> {error} </p>
            }

            <button type="submit"> Finalizar Compra </button>
        </form>
        {
            ordenId && (
                <strong>¡Gracias por tu compra! Tu número de orden es {ordenId} </strong>
            )
        }
    </div>
  )
}

export default Checkout

// //checkout antrior

// const Checkout = () => {
//   const [nombre, setNombre] = useState("");
//   const [apellido, setApellido] = useState("");
//   const [telefono, setTelefono] = useState("");
//   const [email, setEmail] = useState("");
//   const [emailConfirmacion, setEmailConfirmacion] = useState("");
//   const [error, setError] = useState("");
//   const [ordenId, setOrdenId] = useState("");

//   const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

//   //Funciones y validaciones:

//   const manejadorFormulario = (event) => {
//     event.preventDefault();

//     //verificamos que los campos esten completos
//     if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
//       setError("Por favor completa todos los campos");
//       return;
//     }

//     //Validamos que todos los campos del mail coincidan
//     if (email !== emailConfirmacion) {
//       setError("Los campos de email no coinciden!");
//       return;
//     }

//     //Paso 1: Creamos un objeto con todos los datos de la orden de compra

//     const orden = {
//       items: carrito.map(producto => ({
//         id: producto.item.id,
//         nombre: producto.item.nombre,
//         cantidad: producto.cantidad,
//       })),
//       total: total,
//       fecha: new Date(),
//       nombre,
//       apellido,
//       telefono,
//       email,
//     };

//     //Paso 2: Guardar la orden en la base de datos

//     addDoc(collection(db, "ordenes"), orden)
//       .then(docRef => {
//         setOrdenId(docRef.id);
//         vaciarCarrito();
//       })
//       .catch((error) => {
//         console.log("Error al crear la orden", error);
//         setError("Se produjo un error al crear la orde!!");
//       })
//   }

// return (
// <div>
//   <h2> Checkout </h2>
//   <form onSubmit={manejadorFormulario}>
//       {
//           carrito.map (producto => (
//               <div key={producto.item.id}>
//                   <p> {producto.item.nombre} x {producto.cantidad} unidades </p>
//                   <p> Precio por Unidad {producto.item.precio}</p>
//                   <img src={producto.item.img} alt={producto.item.nombre} />
//                   <hr />
//               </div>
//           ))
//       }
//       <p>Cantidad de Prendas en el Carrito: {cantidadTotal}</p>
//       <h2>Total Compra: $ {total}</h2>
//       <hr />

//       <div className="form-group">
//           <label htmlFor=""> Nombre </label>
//           <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
//       </div>
      
//       <div className="form-group">
//           <label htmlFor=""> Apellido </label>
//           <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
//       </div>

//       <div className="form-group">
//           <label htmlFor=""> Telefono </label>
//           <input type="text"  value={telefono} onChange={(e) => setTelefono(e.target.value)} />
//       </div>

//       <div className="form-group">
//           <label htmlFor=""> Email </label>
//           <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} />
//       </div>

//       <div className="form-group">
//           <label htmlFor=""> Email Confirmacion </label>
//           <input type="email"  value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
//       </div>

//       {
//           error && <p style={{ color: "red" }}> {error} </p>
//       }

//       <button type="submit"> Finalizar Compra </button>
//   </form>
//   {
//       ordenId && (
//           <strong>¡Gracias por tu compra! Tu número de orden es {ordenId} </strong>
//       )
//   }
// </div>
// )
// }

// export default Checkout