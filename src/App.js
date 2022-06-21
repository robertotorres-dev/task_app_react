import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
// import './App.css';

const todos = [
	{ text: 'Cortar papas', completed: true },
	{ text: 'Inicializar proyecto', completed: false },
	{ text: 'Aprender React', completed: false },
];

function App() {
	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{todos.map((todo) => (
					<TodoItem
						completed={todo.completed}
						key={todo.text}
						text={todo.text}
					/>
				))}
			</TodoList>
			<CreateTodoButton />
		</React.Fragment>
	);
}

export default App;
