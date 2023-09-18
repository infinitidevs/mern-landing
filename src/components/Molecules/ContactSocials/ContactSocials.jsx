import React from 'react';

import { socials } from '../../../data/socials';
import { Icon } from '../../Atoms/Icon';
import { LinksWrapper } from './styles';

const ContactSocials = () => {
  return (
    <LinksWrapper data-testid="contact-socials">
      {socials.map(({ social, img, url }) => (
        <a href={url} key={social}>
          <Icon $height="40px" $width="40px" $filter="invert(1)" src={img} alt={social} />
        </a>
      ))}
    </LinksWrapper>
  );
};

export default ContactSocials;
