import styled from 'styled-components';
import { Box } from '@skynexui/components';

function FormBox(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* width: 100%;*/
  height: 100%;
  max-height: 200px;
  margin-top: 15%;
  margin-left: 10%;
  /* background-color: rgba(255, 0, 0, 0.5); */
`;

export default FormBox;
