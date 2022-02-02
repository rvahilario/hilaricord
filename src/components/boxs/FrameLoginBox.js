import styled from 'styled-components';

function FrameLoginBox(props) {
  return (
    <Frame>
      <img src={'/frameGOW.png'}></img>
      <Container />
      {props.children}
    </Frame>
  );
}

const Container = styled.div`
  display: flex;
  align-items: top;
  position: absolute;
  justify-content: center;
  width: 80%;
  height: 81%;
  margin-top: 10%;
  margin-left: 3%;
  border-radius: 10000px;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.7) 53%,
    rgba(238, 130, 238, 0) 67%
  );
  z-index: -2;
`;

const Frame = styled.div`
  display: flex;
  align-items: top;
  position: relative;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  max-height: 600px;
  min-height: 220px;
  min-width: 220px;
  border-radius: 10000px;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;
    min-height: 220px;
    min-width: 220px;
    object-fit: fill;
    z-index: -1;
  }
`;

export default FrameLoginBox;
