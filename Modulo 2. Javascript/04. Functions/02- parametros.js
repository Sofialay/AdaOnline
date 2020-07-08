// 1
/***********************************************
 * 
 * Escribir una función que reciba como parámetro
 * un número e imprima ese número al revés.
 * array.reverse
 * 
 ***********************************************/
const miFunction = (param) => {
    let array = String(param).split("");
    let array2 = array.reverse();
    console.log(array);
    let resultado = Number(array2.join(""));
    console.log(resultado);
}
miFunction (23);


 //2
 /***********************************************
 * 
 * Escribir una función que reciba una palabra
 * e imprima sus letras ordenadas alfabéticamente.
 * Split y join + sort
 *  
 ***********************************************/

 const miFunction = (palabra) => {
     let array = palabra.split("");
     let array2 = array.sort();
     let resultado = array2.join("");  
     console.log(resultado);   
 }
 miFunction("murcielago");

// 3
 /***********************************************
 * 
 * Escribir una función que reciba una frase
 * e imprima la misma con la primera letra de 
 * cada palabra en mayúsculas.
 * Join y split + slice
 *  
 */

 const miFunction = (frase) => {
    let array = frase.split(" "); //Array = ['el', 'carpincho', 'toma', 'mate']
    let longitud = array.length;
    for (let i=0; i<longitud; i++){

        array[i] = array[i].charAt(0).toUpperCase()+array[i].slice(1);
    }
    console.log(array);
 }
 miFunction("el carpincho toma mate");
