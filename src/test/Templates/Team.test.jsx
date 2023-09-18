/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Team from '../../components/Templates/Team/Team';
import { lawyerProfiles } from '../../data/team';

describe('Team', () => {
  test('should set the correct title text', () => {
    render(<Team />);
    const title = screen.getByText('Nuestro Equipo');
    expect(title).toBeInTheDocument();
  });
  test('should apply the correct background styling to the title', () => {
    render(<Team />);
    const title = screen.getByText('Nuestro Equipo');
    expect(title).toHaveStyle(`
      background: conic-gradient(
        from 180deg at 50% 50%,
        rgb(135, 231, 173) 19.64deg,
        rgb(31, 86, 95) 183.37deg);
    `);
  });
  test('should display the team members information correctly', () => {
    const { getByText } = render(<Team />);
    expect(getByText('Roman Riquelme')).toBeInTheDocument();
    expect(getByText('Asuntos Penales')).toBeInTheDocument();
    expect(getByText('Maria Olivos')).toBeInTheDocument();
    expect(getByText('Asuntos Laborales')).toBeInTheDocument();
  });
  test('should display all lawyer profiles', () => {
    render(<Team />);
    const profiles = screen.getAllByTestId('lawyer-profile');
    expect(profiles.length).toBe(lawyerProfiles.length);
  });
});
