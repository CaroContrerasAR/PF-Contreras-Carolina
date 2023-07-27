import {useState, useEffect} from "react";
// import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";

//importamos nuevas funciones:
import { collection, getDocs, where, query } from 'firebase/firestore';

//collection la voy a usar para vincular una collecion de firestore (collection: "productos")
//getDocs me trae todos los documentos de una collecion
//query la voy a usar para hacer consultas a la BD
//where para usar filtros en las consultas

import { db } from "../../services/config";


const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();
  
  useEffect(() => {
    const misProductos = idCategoria
      ? query(collection(db, "productos"), where("idCat", "==", idCategoria))
      : collection(db, "productos");

    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch((error) => console.log(error));
  }, [idCategoria]);


  // useEffect(() => {
  //   const funcion = idCategoria ? getProductosPorCategoria : getProductos;
    
  //   funcion (idCategoria)
  //     .then(res => setProductos(res))

  // }, [idCategoria])
  return (
    <>
    <h2>{props.greeting}</h2>
    <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer