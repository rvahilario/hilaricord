import styled from 'styled-components';
import { Text } from '@skynexui/components';

function SubTitle(props) {
  return (
    <Container>
      <Text variant="body3">{props.children}</Text>
    </Container>
  );
}

const Container = styled.span`
  color: ${({ theme }) => theme.colors.neutrals._300};
  margin-bottom: 10%;
  padding: 0 5%;
`;

export default SubTitle;
