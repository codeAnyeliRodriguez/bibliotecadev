const express = require('express');
const router = express.Router();

// app.get('/', (req, res) =>{
router.get('/', (req, res) =>{
  // console.log(__dirname)
  // res.send('MI titulo estatico'})
  res.render('index',{titulo : 'MI titulo dinamico'})
})

// app.get('/servicios', (req, res) =>{
router.get('/servicios', (req, res) =>{
  console.log('estas en la pagina de servicios')
  // res.send('estas en la pagina de servicios')
  res.render('servicios', {tituloServicios: 'Este es un mensaje dinamico de servicios'})
})

module.exports = router; 