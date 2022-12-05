import axios from 'axios';

export const getTodoData = () => {
	return axios.get('http://localhost:3001/todo').then((res) => res.data);
};

export const addTodoData = (data) => {
	return axios.post('http://localhost:3001/todo', data);
};

export const editTodoData = (data) => {
	return axios.put(`http://localhost:3001/todo/${data.id}`, data);
};

export const deleteTodoData = (id) => {
	return axios.delete(`http://localhost:3001/todo/${id}`);
};
