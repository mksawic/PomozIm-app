import React, {useContext} from 'react';
import styled, {css, withTheme} from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import Text from 'components/Text.component';
import {LoaderContext} from 'services/utils/Loader.context';

const ButtonContainer = styled.TouchableOpacity(
  ({theme: {colors}, outline, secondary, disabled, hasChildren}) => css`
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: ${hasChildren ? '160px' : '50px'};
    padding: ${hasChildren ? '10px' : '0px'};
    height: 50px;
    background-color: ${colors.primary};
    border: 2px solid ${colors.primary};

    ${() =>
      outline &&
      css`
        background-color: transparent;
      `};

    ${() =>
      secondary &&
      css`
        background-color: ${colors.white};
      `};

    ${() =>
      secondary &&
      outline &&
      css`
        border: 2px solid ${colors.white};
        color: ${colors.white};
        background-color: transparent;
      `};

    ${() =>
      disabled &&
      css`
        background-color: ${colors.gray};
        border: 2px solid ${colors.gray};
      `};

    ${() =>
      disabled &&
      secondary &&
      css`
        background-color: ${colors.white};
        border: 2px solid ${colors.gray};
        color: ${colors.gray};
      `};
  `
);

const getLabelColor = ({outline, secondary, disabled, theme}) =>
  outline || secondary
    ? theme.colors.primary
    : secondary && disabled
    ? theme.colors.gray
    : theme.colors.white;

const Label = styled(Text)`
  color: ${props => getLabelColor(props)};
`;
const Icon = styled(Feather)`
  margin-right: ${({hasChildren}) => (hasChildren ? '8px' : '0px')};
`;

const Button = ({
  outline,
  secondary,
  disabled,
  children,
  icon,
  iconSize = 30,
  ...props
}) => {
  const {loading} = useContext(LoaderContext);
  return (
    <ButtonContainer
      outline={outline}
      secondary={secondary}
      disabled={disabled || loading}
      hasChildren={children}
      {...props}>
      {icon && (
        <Icon
          name={icon}
          size={iconSize}
          color={getLabelColor({outline, secondary, disabled, ...props})}
          hasChildren={children}
        />
      )}
      <Label
        variant="label"
        outline={outline}
        secondary={secondary}
        disabled={disabled}
        selectable={false}>
        {children}
      </Label>
    </ButtonContainer>
  );
};

export default withTheme(Button);
