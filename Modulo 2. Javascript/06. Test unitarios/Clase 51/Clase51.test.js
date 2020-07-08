// Escribir una funcion constructora para manejar llaves de las habitaciones de un hotel:
// El hotel tiene 25 habitaciones y deberia tener 25 propiedades o indices, una por habitacion, para guardar llaves.
// Cada una de estas propiedades deberia permitirme cambiar su estado de "llave guardada" a "llave entregada".
// Comenzar por los tests y testear posibles errores.

function Llaves(llave = false) { //false = guardada
    
    this.llave = llave;
    this.llave = () => this.llave = true; //true = entregada
  }

  /* Una funcion que reciba o un numero o un string
  * correspondiente a un mes, y devuelva el opuesto.
  * (Si recibe 12, devuelve Diciembre, si recibe Diciembre, devuelve 12).
  * Comenzar por los tests, recordar tirar errores y testearlos.
  */
 
 const getDia = (mesODia) => {
    switch(mes) {
        case "enero": 
            return 1;
        case "1": 
            return "enero";
        case "febrero":
            return 2;
        case "2": 
            return "febrero";
        case "marzo":
            return 3;
        case "3":
            return "marzo"; //me quede aca, no se si esta bien
        case "abril":
            return 4;
        case "mayo":
            return 5;
        case "junio":
            return 6;
        case "julio":
            return 7;
        case "agosto":
            return 8;
        case "septiembre":
            return 9;
        case "octubre":
            return 10;
        case "noviembre":
            return 11;
        case "diciembre":
            return 12;
        default:
            throw "El mes no exite";
    }
};

test('le paso "enero" y devuelve 1', () => {
    expect(getDia("enero")).toBe(1);
});
test('le paso "febrero" y devuelve 2', () =>{
    expect(getDia("febrero")).toEqual(2);
});

test('le paso "marzo" y devuelve 3', () =>{
    expect(getDia("marzo")).toEstrictEqual(3);
});
test('le paso "abril" y me dice que no es 6', () =>{
    expect(getDia("abril")).not.toBe(6);
});
test('le paso "mayo" y devuelve 7', () =>{
    expect(getDia("mayo")).toBe(7);
});
