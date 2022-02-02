import styled from 'styled-components';

import Avatar from '../avatars/Avatar';
import Nickname from '../typograph/Nickname';
import { RiDeleteBinLine } from 'react-icons/ri';

function SelfContainer(props) {
  return (
    <Container>
      <InfoContainer>
        <Avatar src={props.message.picture} />
        <Nickname>{props.message.sender}</Nickname>
        <DateContainer>
          {new Date(props.message.created_at).toLocaleDateString()}
        </DateContainer>
      </InfoContainer>
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

const InfoContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row-reverse;
`;

const DateContainer = styled.div`
  margin-right: auto;
  margin-top: 0.4rem;
  color: ${({ theme }) => theme.colors.neutrals._300};
  font-size: 12px;
  display: flex;
  flex-direction: column;
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
