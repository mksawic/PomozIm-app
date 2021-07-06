import React from 'react';
import styled, {css} from 'styled-components/native';

const StyledText = styled.Text(
  ({theme, variant, color}) => css`
    font-size: ${theme.fontSizes[variant]};
    color: ${theme.colors[color]};
    line-height: ${theme.lineHeights.body};
    ${variant === 'label' && 'text-transform: uppercase'}
    ${variant === 'link' && 'text-decoration: underline'}
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
    ${() =>
      ['h1', 'h2', 'label'].includes(variant) &&
      css`
        font-family: ${theme.fonts.heading};
        ${variant !== 'label' && `line-height: ${theme.lineHeights[variant]}`};
      `};
  `
);

const Text = props => <StyledText {...props}>{props.children}</StyledText>;

Text.defaultProps = {
  variant: 'body',
  color: 'textDark'
};

export default Text;
