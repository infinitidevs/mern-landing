import { styled } from 'styled-components';

export const Icon = styled.img`
  height: ${(props) => props.$height || '50px'};
  width: ${(props) => props.$width || '87px'};
  filter: ${(props) => props.$filter};
`;
