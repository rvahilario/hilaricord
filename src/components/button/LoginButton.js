import styled from 'styled-components';

export const LoginButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary._600};
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 10px;
  margin-bottom: 10px;
  transition: background-color 0.5s ease;

  & :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary._500};
  }
`;
