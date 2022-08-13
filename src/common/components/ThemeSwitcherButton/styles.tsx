import styled from 'styled-components';

export const RoundButton = styled.button`
  align-items: center;
  background: none;
  border-radius: 50%;
  border: none;
  color: ${props => props.theme.colors.typography.primary};
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 10px;
`;
