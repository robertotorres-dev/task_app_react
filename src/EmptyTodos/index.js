import React from 'react';

function EmptyTodos() {
	return (
		<div className='LoadingTodo-container'>
			<span className='LoadingTodo-completeIcon'></span>
			<p className='LoadingTodo-text'>Incia con tu primer TODO ...</p>
			<span className='LoadingTodo-deleteIcon'></span>
		</div>
	);
}

export { EmptyTodos };
