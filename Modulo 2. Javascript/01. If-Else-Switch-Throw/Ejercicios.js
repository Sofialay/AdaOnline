/* Else y else if
Else if → tan condicion
Else → sino

const nombre = prompt (“digame su nombre”);
if(nombre ===””) {
alert (“por favor, digame su nombre”); → me dice esto porque requiere que no quede vacio
} else { 
alert (“bienvenide!”); → me dara esta alerta si no dejo el campo vacio. 
}

Desde aqui para agregar un filtro anti-fede agregaremos un else if
entonces seria: 

const nombre = prompt (“digame su nombre”)
if(nombre===””) {
alert (“por favor, digame su nombre”); 
} else if(nombre=== “fede”) {
alert (“por favor, retirese sin hacer escandalo”)
} else {
alert (“bienvenide”);
} 
*/


//Crear un programa que pida al usuario ingresar un numero y mostrar en un mensaje si el valor ingresado es par o impar.

/*Crear un programa que pregunte al usuario cuántos kilos de helado va a comprar y mostrar en un mensaje la cantidad de sabores disponibles según la opción elegida. Opciones:
1/4kg: 2 sabores.
1/2kg: 3 sabores.
3/4kg: 4 sabores.
1kg: 5 sabores.
*/

//Ejercicio par e inpar//
let numero = prompt("Introduce un número");
let resultado = parImpar(numero);

function parImpar(numero) {
  if(numero % 2 == 0) {
    alert("Tu numero es par") }
  else {
    alert("Tu numero es impar")}
}
// Ejercicio 2, helados

const kg = prompt("Bienvendios a Animalaya ¿Cuantos kg desea llevar? 1/4 kg -  1/2kg - 3/4kg - 1kg"); //preguntar a fede como hacer para que quede uno debajo del otro//
 if(kg == "1/4kg") {
        alert ("2 sabores");
}else if(kg == "1/2kg") {
        alert("3 sabores");
}else if(kg == "3/4kg") {
        alert("4 sabores");
}else if (kg == "1kg") {
        alert("5 sabores");
    }

//Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene. 

const meses = prompt("introduzca un mes");

if(meses == "Enero" || meses == "Marzo" || meses == "Mayo" || meses == "Julio" || meses == "Agosto" || meses == "Octubre" || meses == "Diciembre") {
    alert("Este mes tiene 31 días") 
}else if (meses == "Febrero") {
    alert("Febrero tiene 28 días")
}else {
    alert ("Este mes tiene 30 días")
}





const saludo = prompt("Bienvenida a la tienda, ¿cómo es tu nombre?")
        alert("Hola!" +saludo+ ",aprovecha estos productos con un 50% off: Alcohol en gel a $200 y Lavandina a $150. ")
const producto1 = prompt ("Desea comprar alcohol en gel?")
if(producto1 == "si") {
    prompt("¿Cuántas unidades desea comprar?")}
if(producto1 == "no");
const producto2 = prompt("¿Desea aprovechar entonces la promo de la lavandina?");
if(producto2 == "si") {
    prompt("¿Cuántas unidades desea comprar?")}
if(producto2 == "no"){
    alert("Esperamos que vuelva")}
else if("producto1" + "producto2"){
    alert("Resumen de compra")
}


