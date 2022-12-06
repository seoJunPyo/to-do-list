import './App.css';
//components
import TodoInput from './components/AddTodo';
import TodoList from './components/TodoList';
//styled-components
import { Container } from './styledComponents/ContainerStyle';
import Header from './styledComponents/HeaderStyle';

function App() {
	return (
		<Container>
			<Header>To Do List</Header>
			<TodoInput />
			<TodoList />
		</Container>
	);
}

export default App;
