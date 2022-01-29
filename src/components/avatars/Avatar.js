import styled from 'styled-components';

function Avatar(props) {
  return (
    <Container>
      <StyledImage src={props.username} />
    </Container>
  );
}

const Container = styled.div``;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1000px;
  /* border-image: url('/frameGOW.png'); */
  flex: 1;
`;

export default Avatar;
