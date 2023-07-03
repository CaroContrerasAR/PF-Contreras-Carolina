const misProductos = [
    {id:"1", nombre: "Yerba", precio: 500, img:"../img/yerba.jpg", idCat:"2"},
    {id:"2", nombre: "Fideos", precio: 200, img:"../img/fideos.jpg", idCat:"2"},
    {id:"3", nombre: "Arroz", precio: 180, img:"../img/arroz.jpg", idCat:"3"},
    {id:"4", nombre: "Aceite", precio: 900, img:"../img/aceite.jpg", idCat:"3"},
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