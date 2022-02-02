import styled from 'styled-components';

import InfoContainer from './InfoContainer';

function SenderContainer(props) {
	return (
		<Container>
			<BoxInfoContainer>{props.children}</BoxInfoContainer>
			<Text>{props.message.text_message}</Text>
		</Container>
	);
}

const Container = styled.div`
	border-radius: 10px;
	padding: 6px;
	margin-bottom: 12px;
	transition: 0.3s;

	& :hover {
		background-color: ${({ theme }) => theme.colors.primary._600};
	}
`;

const Text = styled.div`
	display: flex;
	flex-direction: row;
`;

const BoxInfoContainer = styled.div`
	margin-bottom: 10px;
	display: flex;
	justify-content: space-between;
`;

export default SenderContainer;
