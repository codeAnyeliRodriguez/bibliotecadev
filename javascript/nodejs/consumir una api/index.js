/* 
Para consumir una API y mostrarla por consola en JavaScript, puedes utilizar la función fetch para hacer una solicitud HTTP y luego procesar la respuesta. Aquí tienes un ejemplo básico de cómo hacerlo: */

/* fetch('https://jsonplaceholder.typicode.com/posts')// Reemplaza la URL con la dirección de la API que deseas consumir
  .then(response => response.json()) // Parsea la respuesta como JSON
  .then(data => {
    console.log(data)
    console.log(typeof data); // Muestra los datos en la consola
  })
  .catch(error => {
    console.log('Ocurrio un error:',error);// Maneja los errores
  })
 */ 
 /* 
En este ejemplo, se realiza una solicitud GET a la URL de la API utilizando fetch. Luego, se encadenan las promesas then para procesar la respuesta. Primero, la respuesta se convierte en formato JSON utilizando el método json(). Luego, los datos se imprimen en la consola utilizando console.log. Si ocurre algún error durante la solicitud, se captura en el bloque catch y se muestra un mensaje de error.

Recuerda reemplazar 'https://api.example.com/data' con la URL de la API real que deseas consumir. Además, ten en cuenta que dependiendo de la API que estés utilizando, es posible que necesites agregar encabezados o parámetros adicionales a la solicitud para autenticación u otras configuraciones específicas. */

// .then (res => console.log(res));

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
     // Aquí puedes manipular los datos obtenidos de la API
    mostrarDatos(data);
  }).catch(function(error){
    console.log('Error:',error)
  })

  function mostrarDatos(data){
    var container = document.getElementById('container');

// Limpiar el contenedor antes de agregar nuevos elementos
    container.innerHTML = '';

    data.forEach(function(item) {
      var element = document.createElement('div');
      element.textContent = item.title;// Limpiar el contenedor antes de agregar nuevos elementos
      container.appendChild(element)
    });

    data.forEach(function(item) {
      var element = document.createElement('h2');
      element.textContent = item.id;// Limpiar el contenedor antes de agregar nuevos elementos
      container.appendChild(element)
    });

    data.forEach(function(item) {
      var element = document.createElement('h2');
      element.textContent = item.userId;// Limpiar el contenedor antes de agregar nuevos elementos
      container.appendChild(element)
    });
  }