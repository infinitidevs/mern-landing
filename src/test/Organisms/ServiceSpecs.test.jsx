/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import ServiceSpecs from '../../components/Organisms/ServiceSpecs/ServiceSpecs';

describe('ServiceSpecs', () => {
  test('should render the component with correct props passed', () => {
    const props = {
      src: 'image.png',
      alt: 'image',
      iconWidth: '50px',
      subtitle: 'Subtitle',
      right: true,
      rightMobileL: true,
      rightMobileS: false,
      text: 'Text',
      text2: {
        first: 'First',
        second: 'Second',
      },
      text3: {
        first: null,
        second: null,
        third: null,
      },
      text4: null,
      text5: {
        first: null,
        second: null,
      },
      text6: {
        first: null,
        second: null,
      },
    };

    render(<ServiceSpecs {...props} />);

    expect(screen.getByAltText('image')).toBeInTheDocument();
    expect(screen.getByText('Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Text')).toBeInTheDocument();
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
  });
  test('should render the component with correct props passed', () => {
    const props = {
      src: 'image.png',
      alt: 'image',
      iconWidth: '50px',
      subtitle: 'Subtitle',
      right: true,
      rightMobileL: true,
      rightMobileS: false,
      text: null,
      text2: {
        first: null,
        second: null,
      },
      text3: {
        first: 'first',
        second: 'second',
        third: 'third',
      },
      text4: 'fourth',
      text5: {
        first: null,
        second: null,
      },
      text6: {
        first: null,
        second: null,
      },
    };

    render(<ServiceSpecs {...props} />);

    expect(screen.getByAltText('image')).toBeInTheDocument();
    expect(screen.getByText('Subtitle')).toBeInTheDocument();
    expect(screen.getByText('first third')).toBeInTheDocument();
    expect(screen.getByText('second')).toBeInTheDocument();
    expect(screen.getByText('fourth')).toBeInTheDocument();
  });
  test('should render the component with correct props passed', () => {
    const props = {
      src: 'image.png',
      alt: 'image',
      iconWidth: '50px',
      subtitle: 'Subtitle',
      right: true,
      rightMobileL: true,
      rightMobileS: false,
      text: null,
      text2: {
        first: null,
        second: null,
      },
      text3: {
        first: null,
        second: null,
        third: null,
      },
      text4: null,
      text5: {
        first: 'First',
        second: 'Second',
      },
      text6: {
        first: 'Third',
        second: 'Fourth',
      },
    };

    render(<ServiceSpecs {...props} />);

    expect(screen.getByAltText('image')).toBeInTheDocument();
    expect(screen.getByText('Subtitle')).toBeInTheDocument();
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
    expect(screen.getByText('Third')).toBeInTheDocument();
    expect(screen.getByText('Fourth')).toBeInTheDocument();
  });
});
test('should display the correct text with highlighted sections', () => {
  const props = {
    src: 'image.png',
    alt: 'image',
    iconWidth: '50px',
    subtitle: 'Subtitle',
    right: true,
    rightMobileL: true,
    rightMobileS: false,
    text: 'Text',
    text2: {
      first: 'Accent',
      second: 'Second',
    },
    text3: {
      first: 'First',
      second: 'Accent2',
      third: 'Third',
    },
    text4: 'Text 4',
    text5: {
      first: 'Accent3',
      second: 'Second',
    },
    text6: {
      first: 'First',
      second: 'Accent4',
    },
  };

  render(<ServiceSpecs {...props} />);

  expect(screen.getByText('Accent')).toBeInTheDocument();
  expect(screen.getByText('Accent2')).toBeInTheDocument();
  expect(screen.getByText('Accent3')).toBeInTheDocument();
  expect(screen.getByText('Accent4')).toBeInTheDocument();
});
