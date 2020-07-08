/***********************************************
 * 
 * 1. Hacer una función que guarde una persona
 *    en una lista de listas de datos de personas.
 *    Es decir, una lista con varias listas adentro.
 *    Deberia guardar por cada persona, una lista de datos
 *    que incluyan el nombre completo, la edad y 
 *    la dirección de email.
 * 1b. Al ingresar nueva persona, validar que no 
 *     exista en la lista. Si existe, tirar
 *     un error. (Usar funcion distinta para validar
 *     y llamar dentro de la funcion de guardar persona).
 * 2. Hacer una función que me devuelva la lista
 *    completa de personas.
 * 3. Hacer una función que me permita encontrar
 *    una persona por email.
 * 4. Hacer una función que me permita encontrar 
 *    personas por nombre o parte del nombre.
 * 5. Hacer una función para borrar personas por mail.
 * 6. Hacer una funcion que permita modificar nombre
 *    buscando por mail.
 * 7. Hacer una funcion que permita modificar edad 
 *    buscando por mail.
 * Observaciones: 
 *  - Pensar en arrays dentro de arrays variable = [ ['dato1', 2, true], [], [] ]
 *  - Utilizar funciones de los arrays, find (o findIndex), map o for of
 *  - Utilizar nombres de variables y funciones representativas
 * 
 ************************************************/

const lista = [ //punto 1. lista de listas de datos de personas. 
    ['Ornella', 25, 'violeta@mail.com'], //0 posicion de array
    ['Agustina', 24, 'amarillo@mail.com'], //1
    ['Valeria', 37, 'morado@mail.com'], //2
    ['Nikolas', 31, 'rojo@mail.com'], //3
  ];
  
  const validar =(nombre,edad,mail)=>{ //punto 1b. validacion de usuario. Como sabe el programa que (nombre,edad,mail) refiere a ['Ornella', 25, 'violeta@mail.com']?
    const nuevoIngreso = lista.find(user=>nombre===user[0] && edad===user[1] && mail===user[2]) //return tacito. Aca find es un callback y nos da un parametro para comparar
    if(nuevoIngreso)/*si es true*/{
      throw new Error ("El usuario ya existe");
    }
  }
  
  const agregar =(nombre,edad,mail)=>{
    validar(nombre,edad,mail);
    lista.push([nombre,edad,mail]);
  }
  
  const impresionUsuarios =()=>{ //2. funcion que devuelve la lista completa de personas.
    console.log(lista);
  }
  
  const encontrarPorMail =(mail)=>{ //3. funcion que permita encontrar a una persona por mail.
    const buscaMail = lista.find(persona=>mail === persona[2]) //return tacito
    return buscaMail; //el return buscaMail es para EncontrarUsuario
  }
  
  const encontrarPorNombre=(nombre)=>{ // 4. funcion que permite buscar por nombre o parte del nombre. DUDA --> nombre tiene que ver con la funcion validar? 1.b
    if(nombre.length>=3){ //nombre.lenght esta separando letra por letra, es mayor o igual a 3 (en este caso serian tre letras de la palabra)
      const buscaNombre = lista.find(persona=>persona[0].includes(nombre)); //persona [0], include: determina si un string tiene los mismos caracteres que otro string o array. En este caso determina si 'persona[0]' comparte caracteres con 'nombre'.
      return buscaNombre;  
    }else{
      alert("Nombre no valido");
    }
    
  }
  
  const eliminarPorMail =(mail)=>{ // funcion para eliminar personas por mail
    const personaIndice = lista.findIndex(persona=>mail === persona[2]) //nos devuelve un indice de la persona si no existe devuelve -1
    if(personaIndice>-1){
      lista.splice(personaIndice, 1); //arr.splice(index,num_elem)
      alert("El usuario fue eliminado");
    }else{
      alert("No se encontro el mail ingresado");
    }
  }
  
  const modificarNombre =(mail)=>{
    const personaAModificar = lista.findIndex(persona=>mail === persona[2]);
    if(personaAModificar>-1){
      alert(`El usuario que quiere modificar es ${lista[personaAModificar]}`)
      let nuevoNombre = prompt("Escribe el nuevo nombre");
      lista[personaAModificar].splice(0,1,nuevoNombre);
    }else{
      alert("No se encontro el mail ingresado");
    }
  }
  
  const modificarEdad=(mail)=>{
    const personaAModificar = lista.findIndex(persona=>mail === persona[2]);
    if(personaAModificar>-1){
      alert(`El usuario que quiere modificar es ${lista[personaAModificar]}`)
      let nuevaEdad = Number(prompt("Escribe la nueva edad"));
      lista[personaAModificar].splice(1,1,nuevaEdad);
    }else{
      alert("No se encontro el mail ingresado");
    }
  }
  
  const initApp=()=>{
    try{
      let string = prompt('Escriba un nombre un numero y un mail')
      let newUser = string.split(' ');
      newUser[1]=Number(newUser[1]);
  
      agregar(newUser[0],newUser[1],newUser[2]);
      impresionUsuarios();
      let mailBuscar = prompt("Ingrese un mail para buscar al usuario");
      console.log(encontrarPorMail(mailBuscar));
      let nombreBuscar = prompt("Ingrese un nombre para buscar al usuario");
      console.log(encontrarPorNombre(nombreBuscar)); 
      let mailEliminar = prompt("Ingrese un mail para eliminar usuario");
      eliminarPorMail(mailEliminar);
      let nombreModificar = prompt("Ingrese un mail de un usuario para modificar su nombre");
      modificarNombre(nombreModificar);
      let edadModificar = prompt("Ingrese un mail de un usuario para modificar su edad");
      modificarEdad(edadModificar);
    }catch (error) {
      console.error(error);
    }
  }
  