import React from 'react';

import { Icon } from '../../Atoms/Icon';
import { Socials } from './styles';

const LawyerSocials = ({
  email_href,
  email_icon,
  linkedin_href,
  linkedin_icon,
  fb_href,
  fb_icon,
}) => {
  return (
    <Socials>
      <a href={email_href}>
        <Icon
          $width="38px"
          $height="auto"
          $filter="invert(1)"
          src={email_icon}
          alt="Email Logo"
        />
      </a>
      <a href={linkedin_href}>
        <Icon
          $width="38px"
          $height="auto"
          $filter="invert(1)"
          src={linkedin_icon}
          alt="Linkedin Logo"
        />
      </a>
      <a href={fb_href}>
        <Icon
          $width="38px"
          $height="auto"
          $filter="invert(1)"
          src={fb_icon}
          alt="Facebook Logo"
        />
      </a>
    </Socials>
  );
};

export default LawyerSocials;
