import styled from 'styled-components';

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
