comprar(100,50,verTotal);  //la funcion tambien puede ser llamada desde aca arriba
//Es una funcion callback porque recibe como parametro una funcion
function comprar(articulos1, articulos2, funcion){
    articulo1=65;
    articulo2=70;
    let gastado= articulo1 + articulo2;
    funcion(gastado);
}

// function imprimir(mensaje){
function verTotal(mensaje){
    console.log(`compramos leche y pan - gastamos :${mensaje}`);
}

//comprar("leche", 'pan', imprimir);

comprar(65, 70, verTotal);