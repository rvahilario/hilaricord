import styled from 'styled-components';

function LoginBox(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  justify-content: center;
  width: 100%;
  height: 75%;
  min-width: 380px;
  border-radius: 10000px;
  margin: 10px 20px 0 0;
`;

export default LoginBox;
