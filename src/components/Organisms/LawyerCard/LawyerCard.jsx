import React from 'react';

import LawyerHeading from '../../Molecules/LawyerHeading/LawyerHeading';
import LawyerTrack from '../../Molecules/LawyerTrack/LawyerTrack';
import { LawyerProfile } from './styles';

const LawyerCard = ({
  src,
  name,
  topic,
  email_href,
  email_icon,
  linkedin_href,
  linkedin_icon,
  fb_href,
  fb_icon,
  education,
  expertise,
  expertise_accent,
  publishing,
}) => {
  return (
    <LawyerProfile data-testid="lawyer-profile">
      <LawyerHeading
        src={src}
        name={name}
        topic={topic}
        email_href={email_href}
        email_icon={email_icon}
        linkedin_href={linkedin_href}
        linkedin_icon={linkedin_icon}
        fb_href={fb_href}
        fb_icon={fb_icon}
      />
      <LawyerTrack
        education={education}
        expertise={expertise}
        expertise_accent={expertise_accent}
        publishing={publishing}
      />
    </LawyerProfile>
  );
};

export default LawyerCard;
