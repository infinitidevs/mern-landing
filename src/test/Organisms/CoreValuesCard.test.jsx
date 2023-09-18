/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import CoreValuesCard from '../../components/Organisms/CoreValuesCard/CoreValuesCard';

describe('CoreValuesCard', () => {
  test('should render the CoreValuesCard component with the correct props', () => {
    const coreValue = 'Test Value';
    const linesLeft = '10px';
    const text = { first: null, second: 'Second', third: null };
    const text2 = { first: null, second: 'Second2', third: null };
    const text3 = { first: null, second: 'Second3', third: null };

    render(
      <CoreValuesCard
        coreValue={coreValue}
        linesLeft={linesLeft}
        text={text}
        text2={text2}
        text3={text3}
      />,
    );

    expect(screen.getByText(coreValue)).toBeInTheDocument();
    expect(screen.getByText(text.second)).toBeInTheDocument();
    expect(screen.getByText(text2.second)).toBeInTheDocument();
    expect(screen.getByText(text3.second)).toBeInTheDocument();
  });
});
