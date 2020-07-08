/***********************************************
 * Crear un objeto "receta" que tenga una lista 
 * de ingredientes con su cantidad, y un 
 * metodo que muestre un texto de 
 * las cantidades. Por ejemplo:
 * - La receta <nombre> lleva 2 tazas de harina,
 * 5 gramos de levadura, etc...
 */

// Fede solucion
const receta = { //objeto
    nombre: 'pancakes',
    ingredientes: [ //array dentro del objeto
        {cantidad: '2', ingrediente: 'huevos'},
        {cantidad: 'una taza', ingrediente: 'harina'},
        {cantidad: 'una taza', ingrediente: 'leche'}
    ],
    get receta() { //getter
        let texto = `La receta de ${this.nombre} es: `;
        this.ingredientes.forEach(ingrediente => texto += `${ingrediente.cantidad} de ${ingrediente.ingrediente}, `); //como es que texto no se repite?
        const textoFinal = texto.substr(0, texto.length - 2) + '.'; // coloco el 0 que es desde donde va a empezar y texto.length que es donde terminaria
        return textoFinal;
    }
};
