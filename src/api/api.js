import axios from 'axios';

const getTodoData = () => {
	return axios.get('http://localhost:3001/todo').then((res) => res.data);
};

const addTodoData = (data) => {
	return axios.post('http://localhost:3001/todo', data);
};

const editTodoData = (data) => {
	return axios.put(`http://localhost:3001/todo/${data.id}`, data);
};

const deleteTodoData = (id) => {
	return axios.delete(`http://localhost:3001/todo/${id}`);
};

export { getTodoData, addTodoData, editTodoData, deleteTodoData };
