const promesaCumplida = false;

const miPromesa = new Promise((resolve, reject) =>{
  setTimeout(() =>{
    if(promesaCumplida){
      resolve('promesa cumplida!');
    }else{
      reject('promesa rechazada...');
    }
  }, 3000);
})

/* miPromesa.then((valor) =>{
  console.log(valor);
})
 */
const manejarPromesasCumplida = (valor) =>{
  console.log(valor);
};

const manejarPromesasRechazada = (razonRechazo) => {
  console.log(razonRechazo);
}

miPromesa.then(manejarPromesasCumplida, manejarPromesasRechazada);