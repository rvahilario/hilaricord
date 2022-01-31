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
  height: 100%;
  width: 90%;
  /* max-width: 80%; */
  max-height: 80%;
  min-width: 390px;
  padding: 32px;
  /* border-radius: 10000px; */
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
`;

export default ChatContainer;
