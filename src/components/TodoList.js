import React from 'react';
import { TodoListCon } from '../styledComponents/ContainerStyle';
import TodoItem from './TodoItem';

const TodoList = () => {
	return (
		<TodoListCon>
			<TodoItem />
			<TodoItem />
			<TodoItem />
		</TodoListCon>
	);
};

export default TodoList;
