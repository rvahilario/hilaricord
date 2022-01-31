import styled from 'styled-components';

function MessageContainer(props) {
  return (
    <Container
      style={{
        filter: `blur(${props.blur}px)`,
        WebkitFilter: `blur(${props.blur}px)`,
      }}
    >
      {/* <Box
        styleSheet={{
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
        }}
      > */}
      {/* </Box> */}
      {props.children}
    </Container>
  );
}

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex: 1;
  height: 90%;
  /* background-color: theme.colors.neutrals._600; */
  flex-direction: column;
  border-radius: 10px;
  padding: 16px;
  /* overflow: scroll; */
`;

export default MessageContainer;
