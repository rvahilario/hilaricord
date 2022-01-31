import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Button } from '../button/Button';
import { Text } from '@skynexui/components';

function Header() {
  const router = useRouter();
  const handleLogout = () => router.push('/api/auth/logout');

  return (
    <Container>
      <Title>Chat</Title>
      <Button onClick={handleLogout}>Logout</Button>
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

{
  /* <Box
        styleSheet={{
          width: '100%',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box> */
}

export default Header;
