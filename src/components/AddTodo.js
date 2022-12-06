import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
// API
import { addTodoData } from '../api/api';
// StyledCompnents
import {
	AddTodoForm,
	AddTodoInput,
	AddTodoBtn,
} from '../styledComponents/AddTodoStyled';

const TodoInput = () => {
	const queryClient = useQueryClient();
	const [todoText, setTodoText] = useState('');

	// const updateTodoListMutation = useMutation(addTodoData, {
	// 	onSuccess: () => {
	// 		queryClient.invalidateQueries();
	// 	},
	// });

	const getTodoText = (e) => {
		setTodoText(e.target.value);
	};

	const updateTodoListMutation = useMutation(addTodoData, {
		onSuccess: () => {
			queryClient.invalidateQueries();
		},
	});

	const addTodoItem = (e) => {
		e.preventDefault();
		if (todoText === '') {
			return;
		}
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
