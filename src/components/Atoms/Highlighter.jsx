import { styled } from 'styled-components';

export const Highlighter = styled.span`
  color: ${(props) => props.$color || 'var(--ah-color-highlight)'};
`;
