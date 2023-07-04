const misProductos = [
    {id:"1", nombre: "Tapado Espiga", precio: 17999, img:"../img/61703-4Z.jpg", idCat:"3", art:"61703", detalle:"TAPADO 7/8 DE PAÑO ESPIGADO. ACCESO CON CIERRE METALICO. TIENE CORTE RECTO. INTERIOR CON FORRERÍA DE SATÉN ESTAMPADO"},
    {id:"2", nombre: "Montgomery", precio: 15999, img:"../img/61701-3L.jpg", idCat:"3", art:"61701", detalle:"TAPADO TIPO MONTGOMERY DE PAÑO CON DETALLES EN CUERO ECOLÓGICO. ACCESO CON CIERRE METÁLICO Y ALAMARES. LA CAPUCHA TIENE PIEL DESMONTABLE. INTERIOR CON FORRERÍA DE SEDITA ESTAMPADA"},
    {id:"3", nombre: "Gaban con Cierres", precio: 18999, img:"../img/61751-4Z.jpg", idCat:"2", art:"61751", detalle:"ABRIGO DE PANO DERECHO, CON CIERRES Y BOTONES DE METAL, CON CUELLO ALTO"},
    {id:"4", nombre: "Gaban Corto Cruzado", precio: 14999, img:"../img/61752-31.jpg", idCat:"2",art:"61752", detalle:"ABRIGO EN PAÑO CRUZADO, CON BOTONES Y CUELLO SOLAPA"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{    
            resolve(misProductos);
        }, 100)
    })
}

//Creamos una nueva funcion similar que retorna un solo item

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {    
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una funcion que retorna un array de una determinada categoria de productos:

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    }, [])
}