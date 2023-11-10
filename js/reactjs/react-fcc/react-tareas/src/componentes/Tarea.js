import React from 'react';
import '../hojas-de-estilo/Tarea.css';
//import { AiOutlineCloseCircle } from 'react-icons/ai'; //npm install react-icons --save 

function Tarea({ id, texto, completada, completarTarea, eliminarTarea}){
	return(
		<div className={completada ? 'tarea-cont completada' : 'tarea-cont' }>
			<div 
			className='tarea-txt'
			onClick={() => completarTarea(id)}>
			{texto}
			</div>
			
			<div className='tarea-cont-icos'
			onClick={() => eliminarTarea(id)}>
				 x{/*<AiOutlineCloseCircle className='tarea-ico' />*/}
			</div>
		</div>
	)
}

export default Tarea;