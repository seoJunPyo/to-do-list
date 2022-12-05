import React, { useState } from 'react';
import {
	TodoItemCon,
	TodoItemTextCon,
	TodoItemBtnCon,
} from '../styledComponents/ContainerStyle';
import { Btn, Input } from '../styledComponents/CommonStyle';
import { CheckBox } from '../styledComponents/TodoItemStyle';
import { useQueryClient, useMutation } from 'react-query';
import { deleteTodoData, editTodoData } from '../api/api';

import { stopPropagation } from '../event/common';
import { DeleteIcon, EditIcon, CheckIcon } from '../icon/icon';

const TodoItem = (props) => {
	const { id, text, isCompelete } = props.item;
	const queryClient = useQueryClient();
	const [editMode, setEditMode] = useState(false);
	const [editText, setEditText] = useState(text);
	const [compelete, setCompelete] = useState(isCompelete);

	const editTodoMutation = useMutation(editTodoData, {
		onSuccess: () => {
			queryClient.invalidateQueries();
		},
	});

	const deleteTodoMutation = useMutation(deleteTodoData, {
		onSuccess: () => {
			queryClient.invalidateQueries();
		},
	});

	const editTodoText = (e) => {
		setEditText(e.target.value);
	};

	const editTodoItem = () => {
		if (!editMode) {
			setEditMode(!editMode);
			return;
		}
		if (text === editText || editText === '') {
			setEditMode(!editMode);
			return;
		}
		const editData = { text: editText, isCompelete: compelete, id: id };
		editTodoMutation.mutate(editData);
		setEditMode(!editMode);
	};

	const deleteTodoItem = () => {
		deleteTodoMutation.mutate(id);
	};

	const TodoCompelete = (e) => {
		e.stopPropagation();
		setCompelete(!compelete);

		const editData = { text: editText, isCompelete: !compelete, id: id };

		editTodoMutation.mutate(editData);
	};

	return (
		<TodoItemCon>
			<TodoItemTextCon
				onClick={() => {
					setEditMode(!editMode);
				}}>
				<CheckBox
					color={compelete ? '#0067a3' : '#fff'}
					onClick={TodoCompelete}>
					<CheckIcon />
				</CheckBox>
				{editMode ? (
					<Input
						onClick={stopPropagation}
						onChange={editTodoText}
						placeholder={text}
					/>
				) : (
					<div
						style={{ textDecoration: isCompelete ? 'line-through' : 'none' }}>
						{text}
					</div>
				)}
			</TodoItemTextCon>
			<TodoItemBtnCon>
				<Btn onClick={editTodoItem}>
					{editMode ? <CheckIcon /> : <EditIcon />}
				</Btn>
				<Btn onClick={deleteTodoItem}>
					<DeleteIcon />
				</Btn>
			</TodoItemBtnCon>
		</TodoItemCon>
	);
};

export default TodoItem;
