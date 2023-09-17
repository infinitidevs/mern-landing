import React from 'react';

import { lawyerProfiles } from '../../constants/data';
import LawyerCard from '../LawyerCard/LawyerCard';
import { Container, Content, Heading, Title, Wrapper } from './styles';

const Team = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          <Title>NUESTRO EQUIPO</Title>
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
