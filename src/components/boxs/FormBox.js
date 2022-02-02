import styled from 'styled-components';

function FormBox(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  max-height: 200px;
  margin-top: 15%;
  margin-left: 10%;
`;

export default FormBox;
