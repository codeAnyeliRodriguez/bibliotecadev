// primer servidor http
// ctrl c : detener servidor
// node app1.js : arranca el servidor
/* const http = require('http');
const server = http.createServer((req, res) =>{
  res.end('estoy respondiendo a tu solicitud v.3')
})

const puerto =3000;
server.listen(puerto, ()=>{
  console.log('escuchando solicitudes')
}) */
// nodemon
//instalar nodemon: npm install -g nodemon
//poner nodemon a la escucha: nodemon app1.js

// express
//instalar express: npm i express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// conexion a base de datos
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');

const usuario = "youtube_vet"
const password = "contrasena"
const dbname = 'veterinaria'
// database name: veterinaria
// collection name: veterinaria
const uri = `mongodb+srv://youtube_vet:${password}@cluster0.kyqkd29.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log(e))



// motor de plantillas
app.set("view engine", "ejs");
app.set('views',__dirname + '/views')

app.use(express.static(__dirname + '/public'))

// Rutas web
app.use('/', require('./router/rutasweb'));
app.use('/mascotas', require('./router/mascotas'))

app.use((req, res, next)=>{
  // res.status(404).sendFile(__dirname + '/public/404.html')
  res.status(404).render('404',{
    titulo: '404',
    descripcion: 'titulo del sitio web'
  })
})

app.listen(port, ()=>{
  console.log('servidor a su servicio en el puerto', port)
})

/* // Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir); */

// EJS
// instalar EJS: npm i ejs

// heroku
// heroku login
// git init
// heroku git:remote -a express-2-2
// git add .
// git commit -m "meke it better"
// git push heroku master

// git add .
// git commit -m "meke it better"
// git push heroku master

// router
// iniciar router: npm run dev
// express router

// mongoose
// instalar mongoose: npm install mongoose

// mongodb
// instalar mongodb: npm install mongodb
