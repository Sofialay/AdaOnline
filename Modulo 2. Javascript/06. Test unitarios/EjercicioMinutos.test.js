/*const throwMeAnError = () => {
    throw new Error("This is an error");
};
const throwSimple = () =>{
    throw "This is a throw";
};
test('test de array', ()=>{
    const miArray = [
        "valor1",
        "valor2",
        "valor3"
    ];
    expect(miArray).toContain("valor3");
});
test('test de throw', ()=>{
    expect(throwMeAnError).toThrow();
});
test('test de throw error', ()=>{
    // Testea que el throw sea delel tipo de dato Error.
    expect(throwMeAnError).toThrow(Error);
});
test('test de throw string', ()=>{
    expect(throwSimple).toThrow("This is a throw");
});
test('test de throw regex', ()=>{
    expect(throwSimple).toThrow(/throw/);
});
 /********************************************** 
 * Ademas podemos preparar los valores que vamos
 * a necesitar usando beforeEach() y afterEach(), 
 * o setear algunas cosas usando beforeAll y After
 */
/*let funcionDefinida;
let miData;
beforeAll(()=>{
    funcionDefinida = () => {
        console.log(miData);
    }
    console.log('ejecuto before all');
});
beforeEach(()=>{
    miData = 0;
    console.log('ejecuto before each');
});
afterEach(()=>{
    console.log('ejecuto after each')
});
afterAll(() => {
    console.log('Ejecuto after all')
});*/


/*const getDia = (dia) => {
    switch(dia) {
        case "lunes": 
            return 1;
        case "martes":
            return 2;
        case "miercoles":
            return 3;
        case "jueves":
            return 4;
        case "viernes":
            return 5;
        case "sabado":
            return 6;
        case "domingo":
            return 7;
        default:
            throw "El día no existe, guache.";
    }
};

test('le paso "lunes" y devuelve 1', () => {
    expect(getDia("lunes")).toBe(1);
});
test('le paso "martes" y devuelve 2', () =>{
    expect(getDia("martes")).toBe(2);
});

test('le paso "miercoles" y devuelve 3', () =>{
    expect(getDia("miercoles")).toBe(3);
});
test('le paso "sabado" y devuelve 6', () =>{
    expect(getDia("sabado")).toBe(6);
});
test('le paso "domingo" y devuelve 7', () =>{
    expect(getDia("domingo")).toBe(7);
});

test('le paso "demango" tira error', () =>{
    expect(() => {
        getDia("demango");
    }).toThrow("El día no existe, guache.");
});


//////////////
/*test('suma 2 al numero 4, devolviendome 6', () =>{
    expect(sumaDos(4)).toBe(6);
});
test('suma 2 al numero 3, devolviendome 5', () => {
    expect(sumaDos(3)).toBe(5);
});
test('suma 2 al numero 1, devolviendome 3', ()=>{
    expect(sumaDos("1")).toBe(3);
});*/

const funcion = (input) => {
    return Math.floor(input * 60)
}

test('convierte minutos a segundos', () => {
    expect(minutosASegundos(1)).toBe(60);
}); 


///Orne
const minutosASegundos = (number) => {
    return Math.floor(number * 60)
};

test('convierte minutos a segundos', () =>{
    expect(minutosASegundos(1)).toBe(60);
});

test('convierte minutos a segundos', () =>{
    expect(minutosASegundos(2)).not.toBe(60);
});

test('Tira error si esta mal convertido', ()=>{
    expect(minutosASegundos(1)).toThrow(Error);
});




