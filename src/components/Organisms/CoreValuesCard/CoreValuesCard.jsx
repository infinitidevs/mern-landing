import React from 'react';

import { Highlighter } from '../../Atoms/Highlighter';
import { Text } from '../../Atoms/Text';
import { Title } from '../../Atoms/Title';
import { CoreValue, Lines, Lines2, TextWrapper, ValueWrapper } from './styles';

const CoreValuesCard = ({ coreValue, linesLeft, text, text2, text3 }) => {
  return (
    <>
      <CoreValue data-testid="core-value">
        <ValueWrapper>
          <Lines>
            <img alt="Line" src="/assets/about/line-1-1.svg" />
            <img alt="Line" src="/assets/about/line-2-1.svg" />
          </Lines>
          <Title as="h3" $fontSize="18.72px" $letterSpacing="3px" $paddingBt="1rem">
            {coreValue}
          </Title>
          <Lines2 $left={linesLeft}>
            <img alt="Line" src="/assets/about/line-1-1.svg" />
            <img alt="Line" src="/assets/about/line-2-1.svg" />
          </Lines2>
        </ValueWrapper>
        <TextWrapper>
          <Text $$fontSizeMobileL="13px">
            <Highlighter>{text.first}</Highlighter> {text.second}
            <Highlighter> {text.third}</Highlighter>
            {text2.first}
            <Highlighter> {text2.second}</Highlighter> {text2.third}
            {text3.first}
            <Highlighter> {text3.second}</Highlighter> {text3.third}
          </Text>
        </TextWrapper>
      </CoreValue>
    </>
  );
};

export default CoreValuesCard;
