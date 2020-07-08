
// 01
/**
 * Mostrar en consola los números del 100 al 0 utilizando la estructura while, for y do while
 */
//while//
let maximo = 100;

while (maximo > 1) {
    console.log (maximo);
    maximo = maximo - 1;
}

///////////////////
for(let i = 0; i < 100; i--) {
    console.log(i)                  ///////// cuelga la maquina
}

///////////////
let maximo = 100;
do {
    console.log (maximo);
    maximo = maximo - 1;
} while (maximo > 1);



 // 02
 /**
  * Mostrar en consola los números pares del 0 al 1000 utilizando la estructura while, for y do while
  */ 


 
// 03
/**
 * Mostrar en consola la suma parcial de todos los números 
 * que van desde 0 hasta 1000 utilizando la estructura while, for y do while
 */

// 04
/**
 * Mostrar en consola la suma parcial de todos los 
 * números impares que van desde 0 hasta 1000 utilizando la estructura while, for y do while
 */

// 05
/**
 * Mostrar en consola el siguiente dibujo utilizando la estructura while, for y do while
 */
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************

let asterisco = 1;
let pisos = "";

while (asterisco <= 13) {
    pisos = pisos + "*";
    console.log(pisos);
    asterisco++;
} 

// 06
/**
 * Mostrar en consola los números de 10 en 10 desde el 0 hasta el 10000 usando for
 */

// 07
/**
 * Mostrar en consola los números desde el 1000 hasta el 0
 * Cada 10 números, los números se tienen que mostrar con el siguiente formato: **numero**
 
 ejemplo
**1000**
999
998
997
996
995
994
993
992
991
**990**
989
988
987
986
985
984
983
982
981
**980**
979
...
**0**
 
 */