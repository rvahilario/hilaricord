import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaGithubSquare } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';

function CreatedBy() {
  return (
    <Container>
      <h2>
        Developed by <br />
        Renan Hilário
      </h2>
      <li>
        <a
          href={'https://www.linkedin.com/in/renan-hilario/'}
          target={'_blank'}
        >
          <div>
            {/* <ImLinkedin /> */}
            <FaLinkedin />
          </div>
        </a>
        <a href={'https://github.com/rvahilario'} target={'_blank'}>
          <div>
            {/* <FaGithub /> */}
            <FaGithubSquare />
          </div>
        </a>
      </li>
    </Container>
  );
}

export default CreatedBy;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.neutrals._200};
  margin-left: 3%;

  h2 {
    font-size: 0.8rem;
  }

  li {
    /* place-items: center; */
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;

    a {
      color: ${({ theme }) => theme.colors.primary._200};
      /* color: royalblue; */
      margin: 0.5rem;
      font-size: 2rem;
      transition: 0.3s;

      :hover {
        color: ${({ theme }) => theme.colors.primary._900};
      }
    }
  }
`;
