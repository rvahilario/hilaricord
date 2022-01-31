import styled from 'styled-components';

const BackgroundStatic = (props) => {
  const imageBackground = '/kratos_atreus.jpg';

  return (
    <ImageContainer>
      <img
        className="image"
        src={imageBackground}
        style={{
          filter: `blur(${props.blur}px)`,
          WebkitFilter: `blur(${props.blur}px)`,
        }}
      />
      {props.children}
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  height: 100vh;
  min-width: 220px;
  /* object-fit: contain; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);

  & .image {
    object-fit: cover;
    width: 100%;
    height: 100vh;
    min-width: 220px;
    object-position: 40%;
    position: fixed;
    z-index: -10;
    overflow: hidden;
  }
`;

export default BackgroundStatic;
