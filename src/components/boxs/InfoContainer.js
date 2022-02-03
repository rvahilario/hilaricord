import styled from 'styled-components';

import Avatar from '../avatars/Avatar';
import Nickname from '../typograph/Nickname';

function InfoContainer(props) {
	return props.showInfo === true ? (
		<Container>
			<StyledDiv>
				<Avatar src={props.message.picture} />
				<Nickname>{props.message.sender}</Nickname>
			</StyledDiv>
			<DateContainer>
				{new Date(props.message.created_at).toLocaleDateString()}
			</DateContainer>
		</Container>
	) : (
		''
	);
}

const DateContainer = styled.div`
	margin-top: 0.4rem;
	color: ${({ theme }) => theme.colors.neutrals._300};
	font-size: 12px;
`;

const Container = styled.div`
	justify-content: space-between;
	display: flex;
	width: 100%;
`;

const StyledDiv = styled.div`
	display: flex;
	align-items: center;
`;

export default InfoContainer;
