import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
	const [newTodoValue, setNewTodoValue] = React.useState('');

	const { addTodo, setOpenModal } = React.useContext(TodoContext);

	const onCancel = () => {
		// TODO
		setOpenModal(false);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		addTodo(newTodoValue);
		setOpenModal(false);
	};

	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<label>Escribe tu nuevo TODO</label>
			<textarea
				value={newTodoValue}
				onChange={onChange}
				placeholder='Iniiciar semana'
			/>
			<div className='TodoForm-button--container'>
				<button className='TodoForm-button TodoForm-button--cancel' onClick={onCancel} type='button'>
					Cancelar
				</button>
				<button className='TodoForm-button TodoForm-button--add' type='submit'>Añadir</button>
			</div>
		</form>
	);
}

export { TodoForm };
