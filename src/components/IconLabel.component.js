import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import Text from 'components/Text.component';

const IconLabelWrapper = styled(View)`
  align-items: center;
`;
const Icon = styled(Feather).attrs(({theme, color}) => ({
  color: theme.colors[color]
}))``;
const IconLabel = ({
  children,
  name,
  size,
  color,
  variant,
  containerStyle,
  textStyle
}) => (
  <IconLabelWrapper style={containerStyle}>
    <Icon name={name} color={color} size={size} />
    <Text variant={variant} color={color} style={textStyle}>
      {children}
    </Text>
  </IconLabelWrapper>
);

IconLabel.defaultProps = {
  name: 'home',
  size: 24,
  color: 'textDark'
};

export default IconLabel;
