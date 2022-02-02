import styled from 'styled-components';

const BackgroundVideo = (props) => {
  const videoSource = '/bg_video.mp4';
  return (
    <VideoContainer>
      <video
        className="video"
        src={videoSource}
        autoPlay
        loop
        muted
        style={{
          filter: `blur(${props.blur}px)`,
          WebkitFilter: `blur(${props.blur}px)`,
        }}
      />
      {props.children}
    </VideoContainer>
  );
};

const VideoContainer = styled.div`
  height: 100vh;
  min-width: 220px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);

  & .video {
    object-fit: cover;
    width: 100%;
    height: 100vh;
    min-width: 220px;
    position: fixed;
    z-index: -10;
    overflow: hidden;
    object-position: 80% 50%;
  }
`;

export default BackgroundVideo;
