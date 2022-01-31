import styled from 'styled-components';

function MessageContainer(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex: 1;
  height: 90%;
  flex-direction: column;
  border-radius: 10px;
  padding: 16px;
`;

export default MessageContainer;
