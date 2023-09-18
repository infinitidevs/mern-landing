/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import LawyerTrack from '../../components/Molecules/LawyerTrack/LawyerTrack';

describe('LawyerTrack', () => {
  test('should render education, expertise, and publishing information', () => {
    const education = 'Law School';
    const expertise = 'Litigation';
    const expertise_accent = 'Trial Advocacy';
    const publishing = 'Legal Journal';
    render(
      <LawyerTrack
        education={education}
        expertise={expertise}
        expertise_accent={expertise_accent}
        publishing={publishing}
      />,
    );
    expect(screen.getByText(education)).toBeInTheDocument();
    expect(screen.getByText(expertise)).toBeInTheDocument();
    expect(screen.getByText(expertise_accent)).toBeInTheDocument();
    expect(screen.getByText(publishing)).toBeInTheDocument();
  });
});
