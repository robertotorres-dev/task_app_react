import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal,
	} = React.useContext(TodoContext);
	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />

			<TodoList>
				{error && <p>Error al cargar</p>}
				{loading && <p>Estamos cargando</p>}
				{!loading && !searchedTodos.length && <p>Crea tu primer elemento</p>}
				{searchedTodos.map((todo) => (
					<TodoItem
						completed={todo.completed}
						key={todo.text}
						text={todo.text}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>

			{!!openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}

			<CreateTodoButton setOpenModal={setOpenModal} />
		</React.Fragment>
	);
}

export { AppUI };
