import styled from 'styled-components';

const Container = styled.div`
	width: 70%;
	margin: 100px auto;
`;

const TodoListCon = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 24px;
	padding: 12px 20px;
	background-color: #fff;
	border-radius: 10px;
`;

const TodoItemCon = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 16px;

	&:last-child {
		margin-bottom: 0;
	}
`;

const TodoItemTextCon = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 80%;
	margin-left: 8px;
	font-size: 16px;
	border-bottom: 1px solid #e3e3e3;
	cursor: pointer;
`;

const TodoItemBtnCon = styled.div`
	display: flex;
	align-content: center;
	justify-content: center;

	button:first-of-type {
		margin-right: 4px;
	}
`;

export { Container, TodoListCon, TodoItemCon, TodoItemTextCon, TodoItemBtnCon };
