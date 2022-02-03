import styled from 'styled-components';

function InputBox(props) {
	return <Container>{props.children}</Container>;
}

export default InputBox;

const Container = styled.div`
	display: flex;
	height: 15%;
	align-items: center;

	button {
		width: 2.2rem;
		height: 2.2rem;
		color: ${({ theme }) => theme.colors.neutrals._400};
		border-radius: 7px;
		margin: 0.6rem;
	}
`;
