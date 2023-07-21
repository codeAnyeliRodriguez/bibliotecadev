 if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
 }
const app = require('http').createServer((req, res)=>res.sendDate('Hola!'));
const PORT = process.env.PORT || 3000;

console.log(process.env.TOKEN);

app.listen(PORT,() =>{
  console.log(`server is listening on port ${PORT}`);
});