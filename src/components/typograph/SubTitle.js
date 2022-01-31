import styled from 'styled-components';
import { Text } from '@skynexui/components';

function SubTitle(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.span`
  color: ${({ theme }) => theme.colors.neutrals._300};
  margin-bottom: 6px;
  font-size: 10px;
`;

export default SubTitle;
