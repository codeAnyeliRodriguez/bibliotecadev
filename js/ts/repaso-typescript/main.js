// Definir una variable en typescript
var texto = 'codeAnyeli';
var numero = 10;
var verdadero = true;
var cualquiera = 'puedo meter lo que sea';
verdadero = false;
// constantes
var nombre = 'Anyeli Rodriguez';
console.log(texto, numero, verdadero);
// arrays
var personas = ["Anyeli", "gatita", "hermosa", "bebe"];
var div_personas = document.querySelector("#personas");
div_personas.innerHTML = "<ul>" +
    personas.map(function (persona) {
        return "<li> ".concat(persona, " </li>");
    }).join("");
+"</ul>";
