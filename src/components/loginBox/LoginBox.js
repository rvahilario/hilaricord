import styled from 'styled-components';
import { Box } from '@skynexui/components';

function LoginBox(props) {
  return (
    <StyledBox>
      {/* <Box
        styleSheet={{
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
        }}
      > */}
      <>{props.children}</>
      {/* </Box> */}
    </StyledBox>
  );
}

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
  max-width: 600px;
  border-radius: 10px;
  padding: 32px;
  margin: 16px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 50%);
  background-color: rgba(0, 0, 0, 0.7);
  /* ${({ theme }) => theme.colors.neutrals._700}; */
`;

export default LoginBox;
