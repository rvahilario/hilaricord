import styled from 'styled-components';

function Nickname(props) {
  return <StyledFont>{props.children}</StyledFont>;
}

const StyledFont = styled.div`
  color: ${({ theme }) => theme.colors.neutrals._50};
  font-size: 20px;
  margin-right: 10px;
`;

export default Nickname;
