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
