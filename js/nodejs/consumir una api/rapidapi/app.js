/* const fetch = require('node-fetch');

const url = 'https://world-time2.p.rapidapi.com/timezone/Europe/London'; */
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '62a6036136msh43773b466f94b6fp1b6541jsn506d676b535b',
    'X-RapidAPI-Host': 'world-time2.p.rapidapi.com'
  }
};

fetch('https://world-time2.p.rapidapi.com/timezone/Europe/London',options)
/*.then(function(resopnse){
  return resopnse.json();
})
.then(data => {
  console.log(data)
})
.catch(error =>{
  console.log('ocurrio un error:',error)
}) */

.then (res => console.log(res));