/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Contact from '../../components/Templates/Contact/Contact';
import { details } from '../../data/contact';

describe('Contact', () => {
  test('should display the title with a gradient background', () => {
    render(<Contact />);
    const title = screen.getByText('Visítanos');
    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle(
      'background: conic-gradient(from 180deg at 50% 50%, rgb(135, 231, 173) 19.64deg, rgb(31, 86, 95) 183.37deg)',
    );
  });
  test('should render ContactSocials component', () => {
    render(<Contact />);
    const contactSocials = screen.getByTestId('contact-socials');
    expect(contactSocials).toBeInTheDocument();
  });
  test('should render ContactDetails for each item in the details array', () => {
    render(<Contact />);
    const contactDetails = screen.getAllByTestId('contact-details');
    expect(contactDetails.length).toBe(details.length);
  });
  test('should render MapFramer component', () => {
    render(<Contact />);
    const mapFramer = screen.getByTestId('map-framer');
    expect(mapFramer).toBeInTheDocument();
  });
});
