import React, {useState} from 'react';
import '../hojas-de-estilo/TareaForm.css'
import { v4 as uuidv4 } from 'uuid';
function TareaForm(props){
	
	const [input, setInput] = useState('');
	
	const manejarCambio = e =>{
		//console.log('Escribiendo...');
		setInput(e.target.value); //extraer valor del campo de texto
		//console.log(e.target.value);
	}
	
	const manejarEnvio = e =>{
		e.preventDefault();//impide que se carge toda la app
		//console.log('Enviando Formulario...');
		const tareaNueva ={
			id: uuidv4(),//uuid, npm start uuid
			texto: input,
			completada: false
		}
		
		//console.log(tareaNueva);
		props.onSubmit(tareaNueva);
	}
	
	return(
		<form className='tarea-form'
		onSubmit={manejarEnvio}>
		<input 
		type="text"
		className="tarea-input"
		placeholder='Escribe una tarea'
		name='texto' 
		onChange={manejarCambio}
		/>
		<button className="tarea-bt">
			Agregar Tarea
		</button>
		</form>
	)
}

export default TareaForm;