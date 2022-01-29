import styled from 'styled-components';

export const InputBox = styled.input`
  color: ${({ theme }) => theme.colors.neutrals._100};
  background-color: ${({ theme }) => theme.colors.neutrals._600};
  width: 100%;
  height: 30px;
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 5px 10px;
  margin-bottom: 10px;
  transition: 0.5s ease;

  & :focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.primary._600};
    /* transition: 0.3s ease-in-out; */
    background-color: ${({ theme }) => theme.colors.neutrals._800};
  }
`;
