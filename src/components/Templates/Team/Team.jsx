import React from 'react';

import { lawyerProfiles } from '../../../data/team';
import { Title } from '../../Atoms/Title';
import LawyerCard from '../../Organisms/LawyerCard/LawyerCard';
import { Container, Content, Heading, Wrapper } from './styles';

const Team = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          <Title
            $color="transparent"
            $fontFamily="'Philosopher', Helvetica, sans-serif"
            $fontSize="48px"
            $background="conic-gradient(
            from 180deg at 50% 50%,
            rgb(135, 231, 173) 19.64deg,
            rgb(31, 86, 95) 183.37deg)"
            $bgClip="text"
            $bgClipKit="text !important"
            $textFillColorKit="transparent"
            $fontSizeMobileL="36px"
          >
            Nuestro Equipo
          </Title>
        </Heading>
        <Content>
          {lawyerProfiles.map(
            ({
              photo,
              name,
              topic,
              email_url,
              email_icon,
              linkedin_url,
              linkedin_icon,
              fb_url,
              fb_icon,
              education,
              expertise,
              expertise_accent,
              publishing,
            }) => (
              <LawyerCard
                key={name}
                src={photo}
                name={name}
                topic={topic}
                email_href={email_url}
                email_icon={email_icon}
                linkedin_href={linkedin_url}
                linkedin_icon={linkedin_icon}
                fb_href={fb_url}
                fb_icon={fb_icon}
                education={education}
                expertise={expertise}
                expertise_accent={expertise_accent}
                publishing={publishing}
              />
            ),
          )}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Team;
