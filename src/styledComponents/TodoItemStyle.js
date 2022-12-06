import styled from 'styled-components';

export const CheckBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	width: 16px;
	height: 16px;
	margin-right: 8px;
	padding: 2px;
	border: 1px solid darkgray;
	border-radius: 5px;
	background-color: ${(props) => props.color};
`;

export const Btn = styled.button`
	width: 35px;
	height: 35px;
	background-color: #0067a3;
	color: #fff;
	border: none;
	border-radius: 10px;

	&:hover {
		svg {
			width: 15px;
			transition: opacity 0.5s;
			opacity: 0.5;
			transition: all 0.2s;
		}
	}
`;
export const Input = styled.input.attrs({
	type: 'text',
})`
	width: 100%;
	border: none;
	font-size: 16px;
	outline: none;
`;
