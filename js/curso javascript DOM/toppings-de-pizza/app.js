// const titulo = document.getElementById('titulo');
// console.log(typeof contenedor.innerHTML);
// console.log(typeof titulo.innerText);
// console.log(titulo.tagName);
// console.log(titulo);
// const toppings = document.getElementsByClassName('topping');
// console.log(toppings[0].id);
/* const misToppings = document.getElementsByTagName('li');
console.log(misToppings);

const toppingsFondoMarron = document.getElementsByClassName('fondo-marron');
console.log(toppingsFondoMarron); */

/* const aceituna = document.querySelector('#aceitunas');
console.log(aceituna); */

/* const primertoppingnaranja = document.querySelector('.topping.fondo-naranja');
console.log(typeof primertoppingnaranja);
 */

/* const primertoppingnomarron = document.querySelector('ul li:not(.fondo-marron)');
console.log(primertoppingnomarron); */

/* const toppingsNaranja = document.querySelectorAll('.topping.fondo-naranja');
console.log(toppingsNaranja[0]);
console.log(toppingsNaranja[1]);
console.log(toppingsNaranja.length);
console.log(typeof toppingsNaranja); */


// stylo
/* const primerTopping = document.querySelector('.topping');
// propiedades que se pueden personalizar
// console.log(primerTopping.style);
primerTopping.style.backgroundColor = 'blue';
primerTopping.style.color = '#6dff00';
primerTopping.style.textTransform = 'uppercase' */;

/* const listaDeTopping = document.getElementById('lista-toppings');
console.log('> innerText');
console.log(listaDeTopping.innerText);
console.log('> textContent');
console.log(listaDeTopping.textContent);
console.log('> innerHTML');
console.log(listaDeTopping.innerHTML); */

/* const titulo =document.getElementById('titulo');
titulo.innerText = 'Mis Toppings de Favoritos';
 */

// const enlaces = document.getElementsByTagName('a');
// console.log(enlaces[0].getAttribute('href'));
// console.log(enlaces[0].removeAttribute('href'));
// console.log(enlaces[0].setAttribute('href','https://www.freecodecamp.org'));

// const primerTopping = document.querySelector('.topping');
/* primerTopping.classList.add('texto-verde');
console.log(primerTopping.classList); */

/* primerTopping.classList.contains();
console.log(primerTopping.classList);
 */

//  primerTopping.classList.remove('topping');
// console.log(primerTopping.classList);

// crear elemento
const listaDeTopping = document.getElementById('lista-toppings');
const toppingNuevo = document.createElement('li');
toppingNuevo.classList.add('topping', 'fondo-marron');
toppingNuevo.innerText = 'Queso Extra';

listaDeTopping.appendChild(toppingNuevo);

listaDeTopping.append('Hola mundo');

// remover elementos
toppingNuevo.remove();
