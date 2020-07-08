// 01
/**
 * Crear un documento con el nombre arr_006.js
 * Declarar un array con el nombre discoNevermind y asignar los siguientes valores:
 * Smells Like Teen Spirit
 * In Bloom
 * Come As You Are
 * Immodium
 * Lithium
 * Polly
 * Territorial Pissings
 * Drain You
 * Lounge Act
 * Pay To Play
 * On a Plain
 * Endless, Nameless
 * Reemplazar Immodium por Breed
 * Reemplazar Pay To Play por Stay Away
 * Reemplazar Tim por Something in the Way
 * Mostrar en consola la lista de canciones modificada
 * El resultado debería ser:
 * [
    "Smells Like Teen Spirit",
    "In Bloom",
    "Come As You Are",
    "Breed",
    "Lithium",
    "Polly",
    "Territorial Pissings",
    "Drain You",
    "Lounge Act",
    "Stay Away",
    "On a Plain",
    "Something in the Way"
]
 **/
let discoNervermind = [
    "Smells Like Teen Spirit",
    "In Bloom",
    "Come As You Are",
    "Inmodium",
    "Lithium",
    "Polly",
    "Territorial Pissings",
    "Drain You",
    "Lounge Act",
    "Pay to Play",
    "On a Plain",
    "Tim"
]

discoNervermind[3] = 'Breed';
discoNervermind[9] = 'Pay to Play';
discoNervermind[11] = 'Something in the way';
console.log(discoNervermind);



// 02
/**
 * Declarar una variable etiquetasHtml con varios de los nombres de las etiquetas de HTML que ya conocés
 * Mostrar en consola el nombre de la 2da etiqueta del array en mayúsculas
 * Mostrar en consola el nombre de la 5ta etiqueta del array en minúsculas
 * Mostrar en consola la cantidad de etiquetas guardadas en el array
 */

const etiquetasHtml = ['Header', 'Hero', 'Footer', 'Aside', 'Main', 'Section']
etiquetasHtml[1] = 'HERO'; //touppercase
etiquetasHtml[5] = 'section'; //tolowercase
console.log(etiquetasHtml);

 // 03
 // Eliminá el primer elemento del array y colocá en su lugar tu fruta o verdura preferida utilizando shift y unshift.
 let frutas = ['Manzana', 'Banana'];
 let Manzana = frutas.shift();
 let myArr = frutas.unshift('Pomelo'); //está bien declarar otra variable para cambiar frutas?
 console.log (frutas);

// 04
/**
 * Declarar una variable llamada concreteAndGold y asignarle un array vacio []
 * Agregar al array las siguientes canciones:
 * T-Shirt
 * Run
 * Make It Right
 * The Sky Is a Neighborhood
 * La Dee Da
 * Dirty Water
 * Arrows
 * Happy Ever After (Zero Hour)
 * Sunday Rain
 * The Line
 * Concrete and Gold
 * 
 * No se puede utilizar índices numéricos
 * Utilizar alguna de las siguientes funciones: shift, unshift, push, pop
 * Los elementos tienen que guardarse en el mismo orden que se van ingresando
 * Mostrar en consola la primera y última canción
 * Mostrar en consola el contenido del array
 * Resultado esperado:
 */
"T-Shirt"
"Concrete and Gold"
[
    "T-Shirt",
    "Run",
    "Make It Right",
    "The Sky Is a Neighborhood",
    "La Dee Da",
    "Dirty Water",
    "Arrows",
    "Happy Ever After (Zero Hour)",
    "Sunday Rain",
    "The Line",
    "Concrete and Gold"
]

const concreteAndGold = [];
const songs = concreteAndGold.push('T-Shitt', 
'Run', 
'Make It Right',
'The Sky Is a Neightborhood',
'La Dee Da',
'Dirty Water',
'Arrows',
'Happy Ever After (Zero Hour)',
'Sunday Rain',
'The Line',
'Concrete and Gold' )
console.log(concreteAndGold[0]);
console.log(concreteAndGold[11]); 
console.log(concreteAndGold); 

// 05
/**
 * Crear un documento con el nombre arr_014.js
 * Partiendo del siguiente array de números var numeros = [6, 1, 2, 3, 4, 5];
 * Eliminar el primer elemento, y agregarlo al final del array.
 * Mostrar el resultado final.
 * Resultado esperado
 */
[1, 2, 3, 4, 5, 6]

let numbers = [6, 1, 2, 3, 4, 5];
numbers.shift();

console.log (numbers);

numbers.unshift(6);
console.log(numbers);
//06

// Ordernar el siguiente array de menor a mayor *google*
[3,2,5,7,4,1,6] 
sort