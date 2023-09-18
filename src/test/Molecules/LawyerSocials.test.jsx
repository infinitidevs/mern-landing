/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import LawyerSocials from '../../components/Molecules/LawyerSocials/LawyerSocials';

describe('LawyerSocials', () => {
  test('should render all social media icons with correct href and path attributes', () => {
    const email_href = 'https://example.com/email';
    const email_icon = 'path/to/email_icon';
    const linkedin_href = 'https://example.com/linkedin';
    const linkedin_icon = 'path/to/linkedin_icon';
    const fb_href = 'https://example.com/facebook';
    const fb_icon = 'path/to/fb_icon';
    render(
      <LawyerSocials
        email_href={email_href}
        email_icon={email_icon}
        linkedin_href={linkedin_href}
        linkedin_icon={linkedin_icon}
        fb_href={fb_href}
        fb_icon={fb_icon}
      />,
    );
    expect(screen.getByAltText('Email Logo')).toBeInTheDocument();
    expect(screen.getByAltText('Linkedin Logo')).toBeInTheDocument();
    expect(screen.getByAltText('Facebook Logo')).toBeInTheDocument();
  });
});
