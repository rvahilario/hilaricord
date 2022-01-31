import styled from 'styled-components';

import Avatar from '../avatars/Avatar';
import Nickname from '../typograph/Nickname';
import theme from '../../styles/themes/spartan';

function ListMessagesRender(props) {
  return (
    <Container>
      <ListContainer>
        {props.listMessages.map((message) => {
          return (
            <MessageContainer key={message.id}>
              <InfoContainer>
                <Avatar src={message.picture} />
                <Nickname>{message.sender}</Nickname>
                <DateContainer>
                  {new Date(message.created_at).toLocaleDateString()}
                </DateContainer>
              </InfoContainer>
              {message.text_message}
            </MessageContainer>
          );
        })}
      </ListContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 85%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    border-radius: 10px;
    width: 15px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 4px 4px ${theme.colors.primary._600};
    border: solid 4px transparent;
  }
`;

const ListContainer = styled.ul`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1;
  color: ${theme.colors.neutrals._50};
  margin-bottom: 16px;
`;

const MessageContainer = styled.li`
  overflow: hidden;
  border-radius: 10px;
  padding: 6px;
  margin-bottom: 12px;
  transition: 0.3s;

  & :hover {
    background-color: ${theme.colors.primary._600};
  }
`;

const InfoContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
`;

const DateContainer = styled.div`
  margin-left: auto;
  color: ${theme.colors.neutrals._300};
  font-size: 12px;
`;

export default ListMessagesRender;
