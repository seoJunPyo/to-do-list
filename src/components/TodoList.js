import React from 'react';
import { useQuery } from 'react-query';
//components
import TodoItem from './TodoItem';
//API
import { getTodoData } from '../api/api';
//styled Components
import { TodoListCon } from '../styledComponents/ContainerStyle';

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
