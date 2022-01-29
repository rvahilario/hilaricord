import styled from 'styled-components';
import { Box } from '@skynexui/components';

function InfoBox(props) {
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.neutrals._800};
  border: 1px solid ${({ theme }) => theme.colors.neutrals._900};
  justify-content: space-between;
  text-align: center;
  /* margin-bottom: 32px; */
`;

export default InfoBox;

// /*
// styleSheet={{
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   maxWidth: '200px',
//   padding: '16px',
//   backgroundColor: theme.colors.neutrals[800],
//   border: '1px solid',
//   borderColor: theme.colors.neutrals[900],
//   flex: 1,
//   minHeight: '240px',
//   borderRadius: '10px',
//             }}
