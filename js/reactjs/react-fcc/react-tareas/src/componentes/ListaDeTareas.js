import React,{ useState } from 'react';
import TareaForm from './TareaForm';
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from './Tarea';

function ListaDeTareas(){
	
	const [tareas, setTareas] = useState([]);
	
	const agregarTarea = tarea =>{
		//console.log('Tarea agregada');
		console.log(tarea);
		if(tarea.texto.trim()){//verificar que la cadena no esta vacia
			tarea.texto = tarea.texto.trim();//quitar espacios innecesarios
			
			const tareasActualizadas = [tarea, ...tareas];//generar arreglo
			setTareas(tareasActualizadas);//actualizar estado
		}
	}
	
	const eliminarTarea = id =>{
		const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
		setTareas(tareasActualizadas);
	}
	
	const completarTarea = id =>{
		const tareaActualizadas = tareas.map(tarea =>{
			if(tarea.id === id){
				tarea.completada = !tarea.completada;
			}
			return tarea;
		});
		setTareas(tareaActualizadas);
	}
	return(
		<>
		<TareaForm onSubmit={agregarTarea} />
		<div className='tareas-list-cont'>
		{
			tareas.map((tarea)=>
			<Tarea
				key={tarea.id}
				id={tarea.id}
				texto={tarea.texto}
				completada= {tarea.completada}
				completarTarea={completarTarea}
				eliminarTarea={eliminarTarea}
			/>
			)
		}
		</div>
		</>
	);
}

export default ListaDeTareas;