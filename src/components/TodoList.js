import React from 'react';
import { TodoListCon } from '../styledComponents/ContainerStyle';
import TodoItem from './TodoItem';
import { useQuery } from 'react-query';
import { getTodoData } from '../api/api';

const TodoList = () => {
	const result = useQuery('@todoList', getTodoData);

	return (
		<TodoListCon>
			{result.data &&
				result.data.map((item) => <TodoItem item={item} key={item.id} />)}
		</TodoListCon>
	);
};

export default TodoList;
