import styled from 'styled-components';
import { Box } from '@skynexui/components';
import Image from 'next/image';

function LoginBox(props) {
  return (
    // <Frame>
    // <img src={'/frameGOW.png'}></img>
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
      {props.children}
    </Container>
    // </Frame>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  justify-content: center;
  width: 70%;
  height: 80%;
  /* margin-bottom: 10px; */
  /* max-width: 350px; */
  /* max-height: 350px; */
  min-height: 220px;
  min-width: 220px;
  border-radius: 10000px;
  padding: 32px;
  margin: 16px;
  /* box-shadow: 0 2px 10px 0 rgb(0 0 0 / 50%); */
  /* background-color: rgba(102, 0, 0, 0.7); */
  /* background-color: rgba(0, 0, 0, 0.7); */
  /* z-index: 0; */
`;

const Frame = styled.div`
  display: flex;
  align-items: center;
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

export default LoginBox;
