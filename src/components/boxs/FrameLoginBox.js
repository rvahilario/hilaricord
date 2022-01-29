import styled from 'styled-components';
import { Box } from '@skynexui/components';

function FrameLoginBox(props) {
  return (
    <Frame>
      <img src={'/frameGOW.png'}></img>
      <Container>
        {/* <Box
        styleSheet={{
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
        }}
      > */}
        {/* </Box> */}
      </Container>
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
  margin-top: 45px;
  margin-left: 10px;
  border-radius: 10000px;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.7) 53%,
    rgba(238, 130, 238, 0) 67%
  );
  z-index: -1;
`;

const Frame = styled.div`
  display: flex;
  align-items: top;
  position: relative;
  justify-content: center;
  width: 100%;
  /* height: 100%; */
  max-width: 600px;
  max-height: 600px;
  min-height: 220px;
  min-width: 220px;
  /* height: 100%; */
  border-radius: 10000px;
  /* padding: 32px; */
  /* margin: 16px; */
  /* box-shadow: 0 2px 10px 0 rgb(0 0 0 / 50%); */
  /* background: rgba(102, 0, 0, 0.7); */
  /* border-image:  ; */
  /* url('/frameGOW.png'); */
  /* z-index: ; */

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;
    min-height: 220px;
    min-width: 220px;
    object-fit: fill;
    /* z-index: 10; */
  }
`;

export default FrameLoginBox;
