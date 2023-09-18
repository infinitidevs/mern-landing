import styled from 'styled-components';

export const Heading = styled.section`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Caption = styled.div`
  position: relative;
`;

export const Lines = styled.div`
  transform: rotate(270deg);
  height: 10px;
  width: 10px;
  position: absolute;
  left: ${(props) => props.$left || '110px'};
  top: 20px;
`;
