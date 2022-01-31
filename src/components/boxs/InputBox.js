import styled from 'styled-components';

function InputBox(props) {
  return <Container>{props.children}</Container>;
}

export default InputBox;

const Container = styled.div`
  display: flex;
  height: 15%;
`;
