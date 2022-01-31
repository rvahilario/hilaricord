import styled from 'styled-components';

function ChatContainer(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 50%);
  border-radius: 20px;
  height: 100vh;
  width: 90vw;
  max-height: 80%;
  min-width: 360px;
  padding: 32px;
  background-color: rgba(0, 0, 0, 0.8);
`;

export default ChatContainer;
