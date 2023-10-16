// metodo 1
/* const url = "https://randomuser.me/api/";

fetch(url)
.then(function(response){
    // return response.text()
    return response.text()
    .then(data =>{
      console.log(data)
      document.write(data)
    })
    .catch(error =>{
      console.log('Ocurrio un error:', error)
    })
  }); */


  // metodo 2
  fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(res => res.text())
  .then(text => document.write(text))

  fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(res => res.json())
  .then(json => console.log(json))