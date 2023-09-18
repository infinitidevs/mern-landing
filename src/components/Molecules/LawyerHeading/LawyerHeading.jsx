import React from 'react';

import { Photo } from '../../Atoms/Photo';
import { Text } from '../../Atoms/Text';
import LawyerSocials from '../LawyerSocials/LawyerSocials';
import { Lines, Lines2, ProfileHeading } from './styles';

const LawyerHeading = ({
  src,
  name,
  topic,
  email_href,
  email_icon,
  linkedin_href,
  linkedin_icon,
  fb_href,
  fb_icon,
}) => {
  return (
    <ProfileHeading data-testid="lawyer-heading">
      <Photo src={src} alt="Lawyer" />
      <Text
        $color="#61ca88"
        $fontFamily="'Taviraj', Helvetica, sans-serif"
        $fontSize="30px"
        $fontWeight="700"
        $letterSpacing="0"
        $lineHeight="normal"
        $fontSizeMobileL="24px"
        $textAlignMobileL="center"
      >
        {name}
      </Text>
      <Lines>
        <img alt="Line" src="/assets/team/line-1-2.svg" />
        <img alt="Line" src="/assets/team/line-2-2.svg" />
      </Lines>
      <Text
        $color="#ffffff"
        $fontFamily="'Mulish', Helvetica, sans-serif"
        $fontSize="17.5px"
        $fontWeight="400"
        $letterSpacing="0"
        $lineHeight="normal"
      >
        {topic}
      </Text>
      <Lines2>
        <img alt="Line" src="/assets/team/line-1-2.svg" />
        <img alt="Line" src="/assets/team/line-2-2.svg" />
      </Lines2>
      <LawyerSocials
        email_href={email_href}
        email_icon={email_icon}
        linkedin_href={linkedin_href}
        linkedin_icon={linkedin_icon}
        fb_href={fb_href}
        fb_icon={fb_icon}
      />
    </ProfileHeading>
  );
};

export default LawyerHeading;
