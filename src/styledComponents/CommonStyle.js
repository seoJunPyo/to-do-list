import styled from 'styled-components';

export const CommonBtn = styled.button`
	width: 40px;
	height: 40px;
	background-color: #0067a3;
	color: #fff;
	border: none;
	border-radius: 10px;

	&:hover {
		svg {
			width: 18px;
			transition: opacity 0.5s;
			opacity: 0.5;
		}
	}
`;
