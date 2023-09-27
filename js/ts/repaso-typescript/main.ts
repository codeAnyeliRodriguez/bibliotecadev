// Definir una variable en typescript
let texto:string = 'codeAnyeli';
let  numero:number = 10;
let verdadero:boolean = true;
let cualquiera:any = 'puedo meter lo que sea';

verdadero = false;

// constantes
const nombre:string = 'Anyeli Rodriguez';
console.log(texto, numero, verdadero);

// arrays
let personas:string[] = ["Anyeli", "gatita", "hermosa", "bebe"];

let div_personas:HTMLElement | null = document.querySelector("#personas");

div_personas.innerHTML = "<ul>" +
        personas.map(function (persona) {
            return `<li> ${persona} </li>`;
        }).join("");
        +"</ul>";




