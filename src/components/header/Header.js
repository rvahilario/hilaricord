import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Button } from '../button/Button';

function Header() {
  const router = useRouter();
  const handleLogout = () => router.push('/api/auth/logout');

  return (
    <Container>
      <Title>Chat</Title>
      <Button onClick={handleLogout}>
        <span>Logout</span>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.text`
  font-size: 20px;
  font-weight: bold;
`;

export default Header;
