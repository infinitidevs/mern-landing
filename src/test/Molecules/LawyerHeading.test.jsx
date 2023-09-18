/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import LawyerHeading from '../../components/Molecules/LawyerHeading/LawyerHeading';

describe('Footer', () => {
  test('should render the component with all props passed', () => {
    const props = {
      src: 'path/to/photo',
      name: 'John Doe',
      topic: 'Lawyer',
      email_href: 'mailto:john.doe@example.com',
      email_icon: 'path/to/email_icon',
      linkedin_href: 'https://www.linkedin.com/in/johndoe',
      linkedin_icon: 'path/to/linkedin_icon',
      fb_href: 'https://www.facebook.com/johndoe',
      fb_icon: 'path/to/fb_icon',
    };
    render(<LawyerHeading {...props} />);
    expect(screen.getByAltText('Lawyer')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Lawyer')).toBeInTheDocument();
    expect(screen.getByAltText('Email Logo')).toBeInTheDocument();
    expect(screen.getByAltText('Linkedin Logo')).toBeInTheDocument();
    expect(screen.getByAltText('Facebook Logo')).toBeInTheDocument();
  });
});
