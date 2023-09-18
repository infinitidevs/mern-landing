/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ContactSocials from '../../components/Molecules/ContactSocials/ContactSocials';
import { socials } from '../../data/socials';

describe('ContactSocials', () => {
  it('should render social links with correct images and urls', () => {
    render(<ContactSocials />);

    const socialLinks = screen.getAllByRole('link');

    expect(socialLinks).toHaveLength(socials.length);

    socialLinks.forEach((link, index) => {
      expect(link).toHaveAttribute('href', socials[index].url);
      expect(link).toContainHTML(
        `<img src="${socials[index].img}" alt="${socials[index].social}"`,
      );
    });
  });
});
