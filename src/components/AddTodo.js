import React from 'react';
import {
	AddTodoForm,
	AddTodoInput,
	AddTodoBtn,
} from '../styledComponents/AddTodoStyled';

const TodoInput = () => {
	return (
		<AddTodoForm>
			<AddTodoInput type="text" />
			<AddTodoBtn>Add</AddTodoBtn>
		</AddTodoForm>
	);
};

export default TodoInput;
