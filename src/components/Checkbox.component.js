import React from 'react';
import styled, {css} from 'styled-components/native';
import Text from 'components/Text.component';
import {Pressable} from 'react-native';
import {Feather} from '@expo/vector-icons';

const Box = styled.Pressable(
  ({theme: {colors}}) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 24px;
    max-width: 24px;
    height: 24px;
    border-radius: 3px;
    margin-right: 10px;
    border: 2px solid ${colors.textDark};
    background-color: ${colors.white};

    ${({checked}) =>
      checked &&
      css`
        border: 2px solid ${colors.primary};
        background-color: ${colors.primary};
      `};

    ${({disabled}) =>
      disabled &&
      css`
        border: 2px solid ${colors.textDark};
        background-color: ${colors.gray};
        opacity: 0.4;
      `};
  `
);

const CheckboxWrapper = styled.View`
  flex-direction: row;
`;

const Checkbox = ({
  checked,
  disabled,
  onPress,
  label,
  labelVariant,
  labelColor,
  onLabelPress,
  ...props
}) => (
  <CheckboxWrapper {...props}>
    <Box
      checked={checked}
      disabled={disabled}
      onPress={disabled ? null : onPress}>
      {checked && <Feather name="check" color="#FFFFFF" size={20} />}
    </Box>
    <Pressable onPress={disabled ? null : onLabelPress}>
      <Text variant={labelVariant} color={disabled ? 'gray' : labelColor}>
        {label}
      </Text>
    </Pressable>
  </CheckboxWrapper>
);

Checkbox.defaultProps = {
  checked: false,
  label: 'Label',
  labelVariant: 'body',
  labelColor: 'textDark'
};

export default Checkbox;
