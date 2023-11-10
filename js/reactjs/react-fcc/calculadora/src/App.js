import './App.css';
import freecodecampLogo from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs'; //npm install mathjs

function App() {
	
	const [input, setInput] = useState('');
	
	const agreeInput = val => {
		setInput(input + val);
	};
	
	  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

	
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
	  <img src={freecodecampLogo} 
	  className='freecodecamp-logo'
	  alt='Logo de freecodecamp' />
	  </div>
	  
	  <div className='contenedor-calculadora'>
		<Pantalla input={input}/>
		
	  <div className="fila">
		<Boton manejarClic={agreeInput}>1</Boton>
		<Boton manejarClic={agreeInput}>2</Boton>
		<Boton manejarClic={agreeInput}>3</Boton>
		<Boton manejarClic={agreeInput}>+</Boton>
	  </div>
	  <div className="fila">
	  <Boton manejarClic={agreeInput}>4</Boton>
	  <Boton manejarClic={agreeInput}>5</Boton>
	  <Boton manejarClic={agreeInput}>6</Boton>
	  <Boton manejarClic={agreeInput}>-</Boton>
	  </div>
	  <div className="fila">
	  <Boton manejarClic={agreeInput}>7</Boton>
	  <Boton manejarClic={agreeInput}>8</Boton>
	  <Boton manejarClic={agreeInput}>9</Boton>
	  <Boton manejarClic={agreeInput}>*</Boton>
	  </div>
	  <div className="fila">
	  <Boton manejarClic={calcularResultado}>=</Boton>
	  <Boton manejarClic={agreeInput}>0</Boton>
	  <Boton manejarClic={agreeInput}>.</Boton>
	  <Boton manejarClic={agreeInput}>/</Boton>
	  </div>
	  <div className="fila">
	  <BotonClear manejarClear={() => setInput('')}>
		Clear
	  </BotonClear>
	  </div>
	  </div>
    </div>
  );
}

export default App;
