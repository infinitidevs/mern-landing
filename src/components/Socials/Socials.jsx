import React from 'react';

import { socials } from '../../constants/data';
import { SocialsLinks } from './styles';

const Socials = () => {
  return (
    <SocialsLinks>
      {socials.map(({ social, img, url }) => (
        <a href={url} key={social}>
          <img src={img} alt={social} />
        </a>
      ))}
    </SocialsLinks>
  );
};

export default Socials;
