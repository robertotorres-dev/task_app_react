import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
// import './App.css';

const defaultTodos = [
	{ text: 'Cortar papas', completed: true },
	{ text: 'Inicializar proyecto', completed: false },
	{ text: 'Aprender React', completed: false },
];

function App() {
	const [todos, setTodos] = React.useState(defaultTodos);
	const [searchValue, setSearchValue] = React.useState('');

	const completedTodos = todos.filter((todo) => !!todo.completed).length;
	const totalTodos = todos.length;

	let searchedTodos = [];

	if (!searchValue.length >= 1) {
		searchedTodos = todos;
	} else {
		searchedTodos = todos.filter((todo) => {
			const todoText = todo.text.toLowerCase();
			const searchText = searchValue.toLowerCase();

			return todoText.includes(searchText);
		});
	}

	return (
		<React.Fragment>
			<TodoCounter total={totalTodos} completed={completedTodos} />
			<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
			<TodoList>
				{searchedTodos.map((todo) => (
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
