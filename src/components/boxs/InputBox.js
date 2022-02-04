import styled from 'styled-components';

function InputBox(props) {
	return <Container>{props.children}</Container>;
}

export default InputBox;

const Container = styled.div`
	display: flex;
	max-height: 15%;
	align-items: center;
	justify-content: space-between;

	button {
		width: 3rem;
		height: 2.2rem;
		color: ${({ theme }) => theme.colors.neutrals._400};
		border-radius: 8px;
		margin: 0rem;
		font-size: 1.2rem;
	}
`;
