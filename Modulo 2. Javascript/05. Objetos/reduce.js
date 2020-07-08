const lista = [4, 56, 3, 78, 6];
let numeroMayor = lista.reduce((guardar, element) => {
    if (guardar < element) {
        guardar = element;
    }
    return guardar
} ,0)

///

const lista = [4, 56, 3, 78, 6];
let numeroMayor = lista.reduce((acc, val) => Math.max(acc, val));

//let sumaValoracion = this.reviews.reduce((acumulador,element) => acumulador + element.valoracion ,0);
//Math.max(acumulador, element)