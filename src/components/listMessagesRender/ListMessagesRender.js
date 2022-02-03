import styled from 'styled-components';

import SelfContainer from '../boxs/SelfContainer';
import SenderContainer from '../boxs/SenderContainer';
import InfoContainer from '../boxs/InfoContainer';

function ListMessagesRender(props) {
	const lastIndex = props.listMessages.length - 1;

	return (
		<Container>
			{props.listMessages.map((message, index) => {
				// ** Logic to group messages by user ** //
				let showInfo = false;
				if (index === lastIndex) {
					showInfo = true;
				} else {
					const nextUserSub = props.listMessages[index + 1].sub;
					if (message.sub !== nextUserSub) {
						showInfo = true;
					}
				}

				return props.user.sub === message.sub ? (
					<SelfContainer
						message={message}
						key={message.id}
						handleDeleteMessage={props.handleDeleteMessage}
					>
						<InfoContainer message={message} showInfo={showInfo} />
					</SelfContainer>
				) : (
					<SenderContainer message={message} key={message.id}>
						<InfoContainer message={message} showInfo={showInfo} />
					</SenderContainer>
				);
			})}
		</Container>
	);
}

export default ListMessagesRender;

const Container = styled.div`
	margin-bottom: 5px;
	display: flex;
	flex: 1;
	flex-direction: column-reverse;
	overflow: auto;
	color: ${({ theme }) => theme.colors.neutrals._100};
	margin-bottom: 16px;
	font-size: 0.8rem;

	::-webkit-scrollbar {
		border-radius: 10px;
		width: 15px;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		box-shadow: inset 0 0 4px 4px ${({ theme }) => theme.colors.primary._600};
		border: solid 4px transparent;
	}
`;
