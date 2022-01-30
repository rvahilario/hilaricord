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
  display: flex;
  flex: 1;
  flex-direction: column;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  border-radius: 20px;
  height: 100%;
  max-width: 80%;
  max-height: 80%;
  min-width: 250px;
  padding: 32px;
  /* border-radius: 10000px; */
  background-color: rgba(0, 0, 0, 0.8);
`;

export default MessageContainer;
