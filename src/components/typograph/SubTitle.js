import styled from 'styled-components';
import { Text } from '@skynexui/components';

function SubTitle(props) {
  return (
    <Container>
      <Text variant="body4">{props.children}</Text>
    </Container>
  );
}

const Container = styled.span`
  color: ${({ theme }) => theme.colors.neutrals._300};
  margin-bottom: 10%;
  padding: 0 5%;

  h3 {
    font-size: 50px;
  }
  h4 {
    /* font-size: 20px; */
    font-weight: normal;
    margin-top: 6px;
  }
`;

export default SubTitle;
