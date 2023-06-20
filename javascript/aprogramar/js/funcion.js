/* sintaxis-function

function nombre(parametros,parametros...){
    //codigo a ejecutar
    console.log(algo)//no se toma como un valor retornado
    return algo;//si se toma como un valor retornado. significa que del otro lado alguien recibira un dato
}
 */

// let reciboAlgo=nombre(dinero, bolsa); aca en este case se llama la funcion
/* 
function llamarJaimito(dinero, bolsa){
    console.log('la compra fue exitosa');
    let compra="leche";
    return compra;
}

let reciboAlgo= llamarJaimito("dinero","bolsa");
console.log(reciboAlgo); */
/* 
function llamarJaimito(compra){
    console.log('La compra fue exitosa');
    return compra;
}

let reciboAlgo=llamarJaimito("leche");
console.log(reciboAlgo); */
//las funciones se pueden colocar en cualquier parte de codigo javascript siempre la interpretara de primera
/* function traeDelSuper(producto1, producto2){   
    console.log('La compra fue exitosa');
   return`Te compre ${producto1} y tambien ${producto2}`;
}
 */
/* let hijo=traeDelSuper("pan",'leche');
console.log(hijo);

let tio = traeDelSuper("sal","vino");

tio=traeDelSuper("queso","pan");
console.log(tio);
 */
//let regresaDato2= miFuncion("dulce","queso");

let mifuncion= function traeDelSuper(producto1, producto2){   
    console.log('La compra fue exitosa-funcion asignada a una variable');
   return`Te compre ${producto1} y tambien ${producto2}`;
}

let regresaDato= miFuncion("pan","leche");
console.log(regresaDato);
 