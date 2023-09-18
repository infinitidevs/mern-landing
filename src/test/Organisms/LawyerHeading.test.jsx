/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import LawyerCard from '../../components/Organisms/LawyerCard/LawyerCard';

describe('LawyerHeading', () => {
  test('should render LawyerProfile component with LawyerHeading and LawyerTrack components', () => {
    render(<LawyerCard />);
    expect(screen.getByTestId('lawyer-profile')).toBeInTheDocument();
    expect(screen.getByTestId('lawyer-heading')).toBeInTheDocument();
    expect(screen.getByTestId('lawyer-track')).toBeInTheDocument();
  });
  test("should display lawyer's name, photo, topic, education, expertise, expertise_accent, and publishing", () => {
    const lawyer = {
      src: 'lawyer.jpg',
      name: 'John Doe',
      topic: 'Criminal Law',
      education: 'LLB',
      expertise: 'Litigation',
      expertise_accent: 'Criminal Defense',
      publishing: 'Legal Journal',
    };
    render(<LawyerCard {...lawyer} />);
    expect(screen.getByText(lawyer.name)).toBeInTheDocument();
    expect(screen.getByAltText('Lawyer')).toBeInTheDocument();
    expect(screen.getByText(lawyer.topic)).toBeInTheDocument();
    expect(screen.getByText(lawyer.education)).toBeInTheDocument();
    expect(screen.getByText(lawyer.expertise)).toBeInTheDocument();
    expect(screen.getByText(lawyer.expertise_accent)).toBeInTheDocument();
    expect(screen.getByText(lawyer.publishing)).toBeInTheDocument();
  });
  test('should pass the correct props to LawyerTrack component', () => {
    const props = {
      src: 'image.jpg',
      name: 'John Doe',
      topic: 'Lawyer',
      email_href: 'mailto:john@example.com',
      email_icon: 'email-icon.svg',
      linkedin_href: 'https://www.linkedin.com/in/johndoe',
      linkedin_icon: 'linkedin-icon.svg',
      fb_href: 'https://www.facebook.com/johndoe',
      fb_icon: 'facebook-icon.svg',
      education: 'Law School',
      expertise: 'Criminal Law',
      expertise_accent: 'Defense',
      publishing: 'Published Articles',
    };

    render(<LawyerCard {...props} />);

    expect(screen.getByTestId('lawyer-track')).toHaveTextContent(props.education);
    expect(screen.getByTestId('lawyer-track')).toHaveTextContent(props.expertise);
    expect(screen.getByTestId('lawyer-track')).toHaveTextContent(props.expertise_accent);
    expect(screen.getByTestId('lawyer-track')).toHaveTextContent(props.publishing);
  });
});
