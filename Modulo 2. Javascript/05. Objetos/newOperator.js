// Ejercicios // 


function Ingredientes (cantidad, ingrediente) {
    this.cantidad = cantidad;
    this.ingrediente = ingrediente;
}

function Receta (nombre) {
    this.nombre = nombre;
    this.ingredientes = [];
    this.agregarIngredientes = (cantidad,ingrediente) =>{
        let newIngrediente = new Ingredientes(cantidad,ingrediente);
        this.ingredientes.push(newIngrediente);
    }
}

/*function Recetazas () {
    this.lista = [];

    this.agregarReceta = (nombre,cantidad,ingrediente) =>{
        const newReceta = new Receta(nombre);
        this.lista.push(newReceta);
        let index = this.lista.findIndex(nombreReceta => nombreReceta = nombre);
        this.lista[index].agregarIngredientes(cantidad,ingrediente);
    }
    //this.agregarIngredientesPorReceta = (nombre,cantidad, ingrediente) =>{    
    //}
}*/

function Recetazas () {
    this.lista = [];

    this.agregarReceta = (nombre, cantIng) =>{
        const newReceta = new Receta(nombre);
        for (let i=0; i<cantIng; i++) {
            let ingre= prompt(`Ingrese ingrediente nro ${i+1}: `);
            let cant= prompt(`Ingrese cantidad: `);
           newReceta.agregarIngredientes(ingre, cant);
        }
        this.lista.push(newReceta);
    }


//ejemplo//
function Libro (nombre,año) {
    this.nombre = nombre;
    this.año = año;
}

function persona (nombre) {
    this.nombre = nombre;
    this.libros = [];
    this.agregarLibros = (nombre, año) => {
        let newLibro = new Libro(nombre, año)
        this.libros.push(newLibro);
    }
}
//Orne = new persona
//Orne.agregarLibros("Harry Potter", 2001)


