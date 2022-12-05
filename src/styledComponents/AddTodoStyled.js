import styled from 'styled-components';

export const AddTodoForm = styled.form`
	display: flex;
	justify-content: space-between;
	align-content: center;
	background-color: #fff;
	padding: 12px 20px;
	border-radius: 10px;
`;

export const AddTodoInput = styled.input.attrs({
	type: 'text',
	placeholder: 'Add To do!!',
})`
	width: 100%;
	border: none;
	font-size: 18px;
	outline: none;
`;

export const AddTodoBtn = styled.button`
	width: 60px;
	height: 30px;
	padding-left: 16px;
	background: none;
	border: none;
	border-left: 2px solid #e9e9e9;
	color: #0067a3;
	font-size: 20px;
	font-weight: 700;

	&:hover {
		color: rgba(0, 103, 163, 0.5);
		font-size: 19px;
		transition: all 0.2s;
	}
`;
