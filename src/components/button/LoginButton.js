import styled from 'styled-components';

export const LoginButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary._600};
  /* max-width: 100%; */
  width: 50%;
  height: 40px;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 9%;
  transition: background-color 0.5s ease;

  & :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary._500};
  }
`;
