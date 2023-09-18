import styled from 'styled-components';

import { mediaQueries } from '../../../constants/mediaQuerys';

export const Description = styled.section`
  max-width: 590px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  ${mediaQueries.mobileL} {
    max-width: 260px;
  }
`;
