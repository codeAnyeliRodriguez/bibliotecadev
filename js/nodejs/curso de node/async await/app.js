function ordenarproducto(producto){
return new Promise((resolve, reject) => {
  console.log(`Ordenando: ${producto} de freecodecamp.`);
  setTimeout(()=>{
    if(producto ==='taza'){
      resolve('Ordenando una taza con el logo de freecodecamp...');
    }else{
      reject('Este producto no esta disponible actualmente.')
    }
  }, 2000);
});
}

function procesarpedido(respuesta){
  return new Promise(resolve =>{
    console.log('procesando respuesta...');
    console.log(`La respuesta fue: "${respuesta}"`);
    setTimeout(() =>{
      resolve('Gracias por su comprar. Disfruta tu producto de freecodecamp.');
    },4000);
  });
}

// metodo de encadenar promesas
/* ordenarproducto('lapiz')
 .then(respuesta =>{
  console.log('Respuesta recibida');
  console.log(respuesta);
  return procesarpedido(respuesta);
 })
 .then(respuestaprocesada =>{
  console.log(respuestaprocesada);
 })
 .catch(err =>{
  console.log(err);
 }) */

//  async await
async function realizarpedido(producto){
  try{
  const respuesta = await ordenarproducto(producto);
  console.log('Respuesta recibida');
  console.log(respuesta);
  const respuestaprocesada =await procesarpedido(respuesta);
  console.log(respuestaprocesada);
} catch(error){
  console.log(error);
}
}

realizarpedido('lapiz');