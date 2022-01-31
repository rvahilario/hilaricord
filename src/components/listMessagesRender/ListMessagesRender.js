import styled from 'styled-components';

import SelfContainer from '../boxs/SelfContainer';
import SenderContainer from '../boxs/SenderContainer';

function ListMessagesRender(props) {
  return (
    <Container>
      {props.listMessages.map((message) => {
        return props.user.sub === message.sub ? (
          <SelfContainer message={message} key={message.id}></SelfContainer>
        ) : (
          <SenderContainer message={message} key={message.id}></SenderContainer>
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
  color: ${({ theme }) => theme.colors.neutrals._50};
  margin-bottom: 16px;
  font-size: 16px;

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
