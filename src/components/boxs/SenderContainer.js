import styled from 'styled-components';

import Avatar from '../avatars/Avatar';
import Nickname from '../typograph/Nickname';

function SenderContainer(props) {
  return (
    <Container>
      {console.log(props)}
      <InfoContainer>
        <Avatar src={props.message.picture} />
        <Nickname>{props.message.sender}</Nickname>
        <DateContainer>
          {new Date(props.message.created_at).toLocaleDateString()}
        </DateContainer>
      </InfoContainer>
      <Text>{props.message.text_message}</Text>
    </Container>
  );
}

export default SenderContainer;

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
  flex-direction: row;
`;

const InfoContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
`;

const DateContainer = styled.div`
  margin-left: auto;
  color: ${({ theme }) => theme.colors.neutrals._300};
  font-size: 12px;
  margin-right: 10px;
`;
