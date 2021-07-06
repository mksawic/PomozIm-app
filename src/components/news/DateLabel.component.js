import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import Text from 'components/Text.component';
import {dateDayMonth} from 'services/utils/Date.utils';
const DateWrapper = styled(View)`
  position: absolute;
  min-width: 80px;
  min-height: 60px;
  padding: 4px 8px;
  right: 10px;
  bottom: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 20px;
`;

const DateText = styled(Text)`
  text-align: center;
  line-height: 28px;
`;

const DateLabel = ({date}) => {
  return (
    <DateWrapper>
      <DateText variant="h2" color="white">
        {dateDayMonth(date)}
      </DateText>
    </DateWrapper>
  );
};

export default DateLabel;
