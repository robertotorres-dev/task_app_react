import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';

function AppUI({
	loading,
	error,
	totalTodos,
	completedTodos,
	searchValue,
	setSearchValue,
	searchedTodos,
	completeTodo,
	deleteTodo,
}) {
	return (
		<React.Fragment>
			<TodoCounter total={totalTodos} completed={completedTodos} />
			<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
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
			<CreateTodoButton />
		</React.Fragment>
	);
}

export { AppUI };
