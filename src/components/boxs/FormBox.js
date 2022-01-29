import styled from 'styled-components';
import { Box } from '@skynexui/components';

function FormBox(props) {
  return (
    <Container>
      {/* <Box
        as="form"
        styleSheet={{
          width: { xs: '100%', sm: '50%' },
        }}
      > */}
      {props.children}
      {/* </Box> */}
    </Container>
  );
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
  margin-top: 50px;
  margin-left: 10px;
  /* background-color: rgba(255, 0, 0, 0.5); */
`;

export default FormBox;
