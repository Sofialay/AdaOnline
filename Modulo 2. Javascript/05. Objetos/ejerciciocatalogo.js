/**********************************************
 * Hacer un programa que nos permita 
 * cargar/modificar/borrar un catalogo de 
 * productos (deberían tener "id", como identificador 
 * único de número, por ej: 1, 2, 3.; título, descripción
 * de producto y precio (float)).
 * 
 *********************************************/

let catalogo = []; // Creo un array vacio donde voy a introducir los productos

const cargaProducto = (id, titulo, descripcion, precio) => { //creo un array con los parametros que van a ser los productos dentro de mi objeto.
    const obj = { //defino un objeto
        id,
        titulo,
        descripcion,
        precio
    }
    catalogo.push(obj); //me va a pushear lo que yo ponga dentro de obj.
}

// ya tengo mi programa listo para introducir los productos
// ahora el siguiente paso es 
 /* cargar/modificar/borrar un catalogo de 
 * productos (deberían tener "id", como identificador 
 * único de número, por ej: 1, 2, 3.; título, descripción
 * de producto y precio (float)).*/


const pideProducto = () => { //hago una funcion y le pido prompt para cada que el valor se introduzca en cargaProducto 
    let cargarId = prompt("Dame el id:"); 
    let cargarTitulo = prompt("Dame el Titulo:");
    let cargarDescripcion = prompt("Dame el Descripcion:");
    let cargarPrecio = parseFloat(prompt("Dame el Precio:"));
    cargaProducto(cargarId, cargarTitulo, cargarDescripcion, cargarPrecio);
}

const modificarProducto = (titulo) => { //hago un programa para modificar el producto.
    let cambioTitulo = prompt("Ingresa el nvo titulo");
    let indexProducto = catalogo.findIndex(producto => producto === titulo);
    if (indexProducto !== -1) { // me da -1 si no encuentra el index.
        console.log(indexProducto);
        catalogo[indexProducto].titulo = cambioTitulo;
        alert(`Tu titulo se ha cambiado a ${cambioTitulo}`);
    }
}
/*
const eliminarProducto = () => {
let elegirProducto = prompt("¿Que producto desea eliminar de su carrito?");
let filtrarProducto = catalogo.filter(eliminar => eliminar === id || eliminar === titulo || eliminar === descripcion || eliminar === precio);
if (elegirProducto === filtrarProducto) {
    alert("Su producto ha sido eliminado");
}
}
*/ 


//Fede solucion
const catalogo = {  //defino mi objeto 
    lista: [], // coloco un array vacio para luego introducir los objetos de la lista
    camposValidos: ["titulo", "descripcion", "precio"], 
    siguienteId: 1,
    buscarPorId: function(id) { //defino una funcion para la consigna buscar por id
     return this.lista.findIndex(producto => id === producto.id);  //utilizo findIndex para buscar el id del producto
    },
    agregar: function(titulo, descripcion, precio) { //defino funcion para agregar productos a la lista. Las funciones son siempre function () NO arrow.
        const producto = { //declaro un objeto
            id: this.siguienteId, //busca en siguienteId, que ya está definido en el catalogo y tiene el valor de 1
            titulo, 
            descripcion,
            precio
        };
        this.lista.push(producto); //añado a 'lista' la funcion producto
        this.siguienteId++; //es lo mismo que hacer siguienteId + siguienteId
    },
    borrar: function(id) { //hago funcion para borrar de la lista, coloco el parametro id que es lo que voy a usar
        this.lista = this.lista.filter(producto => producto.id !== id); //utilizo filter, busca el id del producto y si es diferente de id lo guarda.
    },
    validarModificacion: function(index, campo) { // funcion para validar. No queda claro lo de campo (!) 
        if(index === -1) throw new Error("El ID seleccionado no existe."); //si no existe, es decir nos da -1, entonces tira error
        if(this.camposValidos.indexOf(campo) === -1) throw new Error("El campo seleccionado no es valido."); // de donde sale camposValidos? 
    },
    modificar: function(id, campo, valor) { //defino duncion para modificar mi catalogo con los parametros id, campo, valor.
        const index = this.buscarPorId(id); //creo una variable y llamo a buscarPorId (la primer funcion de catalogo)
        this.validarModificacion(index, campo); // llama a la funcion validarModificacion con su parametro.
        this.lista[index][campo] = valor; // no entiendo 
    }
};
//CARRITO 
let carrito = { //defino un objeto
    lista: [], // le doy un array vacio
    cargar: function(id) { // defino una funcion para cargar en mi carrito
        //validar id con el catalogo
        let index = catalogo.buscarPorId(id); //defino una variable que busca por id en el catalogo
        this.lista.push(catalogo.lista[index]); //le hace push a lo que encuentra en el indice de lista de la funcion catalogo a la lista de carrito. 
    },
    borrar: function(id) { //define funcion borrar (por id)
        validar(id); // llama a validar(id), funcion que le sigue
        this.lista = this.lista.filter(element => element.id !== id); //filtra en la lista buscando por id.
    },
    validar: function(id) { //define funcion para validar
        let index = this.lista.findIndex(element => element.id === id); // defino una variable para buscar por index el id que agregamos en this.cargar.
        if(index === -1) throw new Error(`El producto no se encuentra en el carrito`); // si lo anterior nos devuelve -1 tira un error
    },
    sumar: function() { //define funcion para sumar 
        return this.lista.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    }
}
