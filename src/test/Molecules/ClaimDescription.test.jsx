/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import ClaimDescription from '../../components/Molecules/ClaimDescription/ClaimDescription';

describe('ClaimDescription', () => {
  test('should display the textInit, textAccent, and textEnd correctly', () => {
    const { getByTestId } = render(
      <ClaimDescription textInit="Hello" textAccent="World" textEnd="!" />,
    );
    const description = getByTestId('description');
    expect(description.textContent).toBe('Hello World !');
  });
  test('should apply the correct Highlighter styles to the component', () => {
    render(
      <ClaimDescription
        textInit="Initial Text"
        textAccent="Accent Text"
        textEnd="End Text"
      />,
    );
    const highlighter = screen.getByText('Accent Text');
    expect(highlighter).toHaveStyle(`
      color: var(--ah-color-highlight);
    `);
  });
  test('should display the "textInit" prop correctly', () => {
    const textInit = 'Initial text';
    const textAccent = 'Accent text';
    const textEnd = 'End text';

    render(
      <ClaimDescription textInit={textInit} textAccent={textAccent} textEnd={textEnd} />,
    );

    expect(screen.getByTestId('description')).toHaveTextContent(
      `${textInit} ${textAccent} ${textEnd}`,
    );
  });
  test('should display the "textAccent" prop correctly', () => {
    const textInit = 'Initial text';
    const textAccent = 'Accent text';
    const textEnd = 'End text';

    render(
      <ClaimDescription textInit={textInit} textAccent={textAccent} textEnd={textEnd} />,
    );

    const highlighterElement = screen.getByText(textAccent);
    expect(highlighterElement).toBeInTheDocument();
  });
  test('should display the "textEnd" prop correctly', () => {
    const textInit = 'Initial text';
    const textAccent = 'Accent text';
    const textEnd = 'End text';

    render(
      <ClaimDescription textInit={textInit} textAccent={textAccent} textEnd={textEnd} />,
    );

    expect(screen.getByTestId('description')).toHaveTextContent(
      `${textInit} ${textAccent} ${textEnd}`,
    );
  });
});
