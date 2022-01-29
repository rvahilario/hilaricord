import styled from 'styled-components';
import theme from '../../styles/themes/spartan';

function SpartanFont(props) {
  return <StyledFont>{props.children}</StyledFont>;
}

const StyledFont = styled.div`
  color: ${({ theme }) => theme.colors.neutrals._50};
  font-family: 'godOfWar';
  font-size: 28px;
  font-weight: 400;
`;

export default SpartanFont;
