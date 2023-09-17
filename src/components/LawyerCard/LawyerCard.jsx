import React from 'react';

import {
  Highlighter,
  Icon,
  LawyerProfile,
  Lines,
  Lines2,
  Name,
  Photo,
  ProfileHeading,
  Socials,
  Topic,
  Track,
} from './styles';

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
    <LawyerProfile>
      <ProfileHeading>
        <Photo src={src} alt="Lawyer" />
        <Name>{name}</Name>
        <Lines>
          <img alt="Line" src="/src/assets/team/line-1-2.svg" />
          <img alt="Line" src="/src/assets/team/line-2-2.svg" />
        </Lines>
        <Topic>{topic}</Topic>
        <Lines2>
          <img alt="Line" src="/src/assets/team/line-1-2.svg" />
          <img alt="Line" src="/src/assets/team/line-2-2.svg" />
        </Lines2>
        <Socials>
          <a href={email_href}>
            <Icon src={email_icon} alt="Email Logo" />
          </a>
          <a href={linkedin_href}>
            <Icon src={linkedin_icon} alt="Linkedin Logo" />
          </a>
          <a href={fb_href}>
            <Icon src={fb_icon} alt="Facebook Logo" />
          </a>
        </Socials>
      </ProfileHeading>
      <Track>
        <li>{education}</li>
        <li>
          {expertise} <Highlighter>{expertise_accent}</Highlighter>
        </li>
        <li>{publishing}</li>
      </Track>
    </LawyerProfile>
  );
};

export default LawyerCard;
