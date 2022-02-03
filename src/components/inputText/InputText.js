import styled from 'styled-components';

const InputText = styled.textarea`
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.neutrals._100};
	background-color: ${({ theme }) => theme.colors.neutrals._700};
	width: 100%;
	height: 100%;
	border: 2px solid transparent;
	border-radius: 10px;
	padding: 5px 10px;
	transition: 0.5s ease;
	resize: none;

	& :focus {
		outline: none;
		border: 2px solid ${({ theme }) => theme.colors.primary._600};
		background-color: ${({ theme }) => theme.colors.neutrals._600};
	}

	::-webkit-scrollbar {
		border-radius: 10px;
		width: 15px;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		box-shadow: inset 0 0 4px 4px ${({ theme }) => theme.colors.primary._300};
		border: solid 4px transparent;
	}
`;

export default InputText;
