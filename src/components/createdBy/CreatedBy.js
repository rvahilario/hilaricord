import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { getServerSideProps } from '../../pages/chat';

function CreatedBy() {
  return (
    <Container>
      <h2>
        Developed by <li>Renan Hilário</li>
      </h2>
      <li>
        <a
          href={'https://www.linkedin.com/in/renan-hilario/'}
          target={'_blank'}
        >
          <FaLinkedin />
        </a>
        <a href={'https://github.com/rvahilario'} target={'_blank'}>
          <FaGithub />
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
  color: ${({ theme }) => theme.colors.neutrals._300};
  margin-left: 5%;

  h2 {
    font-size: 0.8rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary._700};
    margin: 0 0.5rem;
    font-size: 2rem;
    transition: 0.3s;

    :hover {
      color: ${({ theme }) => theme.colors.primary._900};
    }
  }

  li {
    margin-top: 0.2rem;
  }
`;
