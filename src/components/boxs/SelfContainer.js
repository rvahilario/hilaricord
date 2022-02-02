import styled from 'styled-components';

import InfoContainer from './InfoContainer';
import { RiDeleteBinLine } from 'react-icons/ri';

function SelfContainer(props) {
	return (
		<Container>
			<BoxInfoContainer>
				<InfoContainer message={props.message} />
			</BoxInfoContainer>
			<TextContainer>
				<Text>{props.message.text_message}</Text>
				<ButtonTask onClick={() => props.handleDeleteMessage(props.message.id)}>
					<RiDeleteBinLine />
				</ButtonTask>
			</TextContainer>
		</Container>
	);
}

export default SelfContainer;

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
	margin-right: auto;
	flex-direction: row-reverse;
	margin-right: 10px;
`;

const BoxInfoContainer = styled.div`
	margin-bottom: 10px;
	display: flex;

	div {
		flex-direction: row-reverse;
	}
`;

const ButtonTask = styled.button`
	background: none;
	border: none;
	color: ${({ theme }) => theme.colors.neutrals._500};
	cursor: pointer;
	font-size: 20px;
	margin-right: 18px;
	margin-left: 6px;
	height: 22px;

	:hover {
		color: ${({ theme }) => theme.colors.primary._50};
	}
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	align-items: center;
`;
