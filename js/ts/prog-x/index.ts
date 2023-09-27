let mensaje: string = 'Hola mundo';
// console.log(mensaje);

let numeros: number[] = [23 ,45 , 16, 37, 3 , 99, 22]; 

type mixto = string | number | boolean | string[];
let datosMixtos: mixto[] = ['texto', 69, true, ['lista dentro de otra lista']];

let jugadores: { [key: number]: string} = {
    10: 'gato',
    11: 'gatita'
};

// const
const pi = 3.14;

// castin
type opciones = 'verde' | 'amarillo' | 'rojo';
let color: string = 'amarillo';

switch (<opciones>color){
    case 'verde':
        console.log('exito');
        break;
    case 'amarillo':
        console.log('advertencia');
        break;
    default:
        console.log('error');
        break;
        
}

function sumar(primero: number, segundo: number):number {
    return primero + segundo;
}

let resultado = sumar(3,4);
console.log(resultado);
