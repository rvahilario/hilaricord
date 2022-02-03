import styled from 'styled-components';

function SenderContainer(props) {
	return (
		<Container>
			<BoxInfoContainer>{props.children}</BoxInfoContainer>
			<Text>{props.message.text_message}</Text>
		</Container>
	);
}

const Container = styled.div`
	border-radius: 5px;
	transition: 0.3s;

	& :hover {
		background-color: ${({ theme }) => theme.colors.primary._600};
	}
`;

const Text = styled.div`
	display: flex;
	flex-direction: row;
	margin: 3px 5px;
`;

const BoxInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 10px 0 5px;
`;

export default SenderContainer;
