import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary._600};
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 10px;
  margin-left: 10%;
  transition: background-color 0.5s ease;
  font-weight: bold;
  font-size: 100%;

  & :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary._800};
  }
`;
