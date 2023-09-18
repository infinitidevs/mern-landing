import React from 'react';

import { Highlighter } from '../../Atoms/Highlighter';
import { Track } from './styles';

const LawyerTrack = ({ education, expertise, expertise_accent, publishing }) => {
  return (
    <Track data-testid="lawyer-track">
      <li>{education}</li>
      <li>
        {expertise} <Highlighter>{expertise_accent}</Highlighter>
      </li>
      <li>{publishing}</li>
    </Track>
  );
};

export default LawyerTrack;
