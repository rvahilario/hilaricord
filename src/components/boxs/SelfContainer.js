import styled from 'styled-components';

import { RiDeleteBinLine } from 'react-icons/ri';

function SelfContainer(props) {
	return (
		<Container>
			<BoxInfoContainer>{props.children}</BoxInfoContainer>
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
	border-radius: 5px;
	transition: 0.3s;

	& :hover {
		background-color: ${({ theme }) => theme.colors.primary._600};

		button {
			color: ${({ theme }) => theme.colors.neutrals._500};

			:hover {
				color: ${({ theme }) => theme.colors.primary._50};
			}
		}
	}
`;

const Text = styled.div`
	display: flex;
	margin-right: auto;
	flex-direction: row-reverse;
	margin-right: 10px;
`;

const BoxInfoContainer = styled.div`
	display: flex;
	margin-left: 5px;

	div {
		flex-direction: row-reverse;
	}
`;

const ButtonTask = styled.button`
	background: none;
	color: rgba(0, 0, 0, 0);
	border: none;
	cursor: pointer;
	font-size: 1rem;
	margin-right: 18px;
	margin-left: 6px;
	height: 15px;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	align-items: center;
	margin: 3px 0;
`;
