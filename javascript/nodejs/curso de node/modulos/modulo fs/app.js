// modulo fs
const fs = require('fs')
/* // leer un archivo

console.log('Antes de leer el archivo')

fs.readFile('index.html','utf-8', (err, contenido)=>{
  if(err){
    // console.log(err)
    throw err;
  }else{
    console.log(contenido)
  }
  console.log('Mensaje...')
})

console.log('despues de leer el archivo')

// cambiar el nombre de un archivo
fs.rename('index.html', 'main.html',(err)=>{
  if(err){
    throw err;
  }
  console.log('Nombre cambiado exitosamente')
}); 

console.log('despues de cambiar el nombre')

// agregar contenido al final de un archivo.
 fs.appendFile('main.html', '<p>Hola</p>',(err) =>{
  if(err){
    throw err;
  }
  console.log('Archivo actualizado...')
}) 

console.log('Despues de agregar contenida al archivo')

// Reemplazar todo el contenido del archivo
 fs.writeFile('main.html', 'contenido nuevo', (err) =>{
  if(err){
    throw err;
  }console.log('Contenido reemplazado exitosamente.');
});
 
console.log('Despues de reemplazar el contenido del archivo...');

// Eliminar archivos
fs.unlink('main.html', (err) => {
  if(err){
    throw err;
  }
  console.log('Archivo eliminado'); 
})

console.log('despues de eliminar el archivo...') */

// leer un archivo

console.log('Antes de leer el archivo');

const archivo = fs.readFileSync('index.html','utf-8');
console.log(archivo);

console.log('despues de leer el archivo');

// cambiar el nombre de un archivo
fs.renameSync('index.html', 'main.html'); 

console.log('despues de cambiar el nombre');

// agregar contenido al final de un archivo.
 fs.appendFileSync('main.html', '<p>Hola</p>');

console.log('Despues de agregar contenida al archivo');

// Reemplazar todo el contenido del archivo
 fs.writeFileSync('main.html', 'contenido nuevo');
 
console.log('Despues de reemplazar el contenido del archivo...');

// Eliminar archivos
fs.unlinkSync('main.html');

console.log('despues de eliminar el archivo...');