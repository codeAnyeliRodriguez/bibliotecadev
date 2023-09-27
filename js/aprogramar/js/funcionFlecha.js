/* let nombre= function(parametros){
    //codigo a ejecutar
} */

/* let funcionFlecha=(parametros)=>{
    //codigo a ejecutar
} */

/* let funcionFlecha=()=>{
    console.log('Esto es desde una funcion flecha');
}

funcionFlecha();//aca se llama a la funcion */
/* const DIAS= 7;//334433
const  funcionFlecha=()=>{ */
//let funcionFlecha=()=>{
   /*  console.log('Esto es desde un funcion flecha');
    return`Flecha dorada`; */
// }

/* let recuperaDato = funcionFlecha();
console.log(recuperaDato); */
//console.log(funcionFlecha());

//console.log('Esto es una ' + recuperaDato);

/* let recuperaDato2=funcionFlecha();
console.log('Esto es una ' + recuperaDato2); */

/**  En las funciones flecha puedo utilizar tanto let como const
 En estos casos el nombre de la constante sigue las buenas practicas
 del nombre de las variables.NO se acostubra a poner su nombre en
 MAYUSCULAS.*/

 //-----------------

const nombre= function(parametros){
    //codigo a ejecutar
}
 const funcionFlecha=()=>{
    console('Esto es desde una funcion flecha');
    return 'flecha dorada';
 }

/*  let recuperaDato = funcionFlecha();
 console log(recuperaDato); */
 
//  Reducir el codigo cuando la funcion en el cuerpo solo usa una sola linea 
const funcionSimple = () =>console.log("Esto es posible porque solo contiene una linea de codigo.");
funcionSimple();

//Si la funcion solo va a recibir un unico parametro no es necesario usar los ()
const funcionEsperaParam=(texto)=>console.log(texto);
funcionEsperaParam('pasamos un argumento a la funcion flecha.');
/* const funcionEsperaParam=texto=>console.log(texto);
funcionEsperaParam('pasamos un argumento a la funcion flecha.')
 */
//Funcion flecha con varios parametros, si necesitamos hacer calculos complejos o usar mad de una linea se recomienda hacerlo entre {} y usar return.
/* const funcionSumar=(dato1,dato2) => dato1 + dato2;
console.log(funcionSumar(10,5)); */
 
const funcionSumar=(dato1,dato2) =>{ 
    let resultado = (dato1 + dato2)*5 **2; //este es en caso de que la funcion de arriba se extienda
    return resultado;
}
console.log(funcionSumar(10,5));

//Reducir el codigo cuando la funcion tiene una sola linea y retornamos un valor
const funcionRetornarValor = () =>"Esto es posible porque solo contiene una linea de codigo, no es necesario usar return.";
console.log(funcionRetornarValor());

//Regresar un objeto
const regresaObjeto= () =>({nombre: "Juan", apellido: "Perez"});
console.log(regresaObjeto());