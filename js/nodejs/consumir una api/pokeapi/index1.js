fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(function(response){
  return response.json()
  .then(data =>{
    console.log(data)
  })
  .catch(error =>{
    console.log('Ocurrio un error:', error)
  })
})