import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addTodoData } from '../api/api';
import {
	AddTodoForm,
	AddTodoInput,
	AddTodoBtn,
} from '../styledComponents/AddTodoStyled';

const TodoInput = () => {
	const [todoText, setTodoText] = useState('');
	const queryClient = useQueryClient();

	const updateTodoListMutation = useMutation(addTodoData, {
		onSuccess: () => {
			queryClient.invalidateQueries();
		},
	});

	const getTodoText = (e) => {
		setTodoText(e.target.value);
	};

	const addTodoItem = (e) => {
		e.preventDefault();
		let todo = { text: todoText, isCompelete: false };
		updateTodoListMutation.mutate(todo);
		setTodoText('');
	};

	return (
		<AddTodoForm>
			<AddTodoInput type="text" onChange={getTodoText} value={todoText} />
			<AddTodoBtn onClick={addTodoItem}>Add</AddTodoBtn>
		</AddTodoForm>
	);
};

export default TodoInput;
