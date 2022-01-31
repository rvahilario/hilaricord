import styled from 'styled-components';

function SpartanFont(props) {
  return <StyledFont>{props.children}</StyledFont>;
}

const StyledFont = styled.div`
  color: ${({ theme }) => theme.colors.neutrals._50};
  font-family: 'godOfWar';
  font-size: 26px;
  width: 99%;
`;

export default SpartanFont;
