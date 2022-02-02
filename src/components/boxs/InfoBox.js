import styled from 'styled-components';

function InfoBox(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.neutrals._800};
  border: 1px solid ${({ theme }) => theme.colors.neutrals._900};
  justify-content: space-between;
  text-align: center;
`;

export default InfoBox;
