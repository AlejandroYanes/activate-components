import styled, { css, StyledProps } from 'styled-components';
import {
  getBgdColor,
  getFontShadeColor,
  getPositionStyles,
  PositionProps
} from 'helpers';
import { elementHeight, inputBorderRadius } from 'styles/variables';
import { InputProps } from '../../types';

export const StyledContainer = styled.div<PositionProps>`
  ${getPositionStyles};
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: relative;
`;

const getLeftPadding = ({ padLeft }) => `padding-left: ${padLeft ? 52 : 20}px`;
const getRightPadding = ({ padRight }) => `padding-right: ${padRight ? 48 : 20}px`;

export const getColorStyles = (props: StyledProps<InputProps>) => {
  const { theme: { colors }, error, disabled } = props;

  if (disabled) {
    return css`
      pointer-events: none;
      cursor: default;
      background-color: transparent;
      color: ${getFontShadeColor};
      border: 1px solid ${getFontShadeColor};
    `
  }

  const hoverBorderColor = error ? colors.ERROR_SHADE : colors.BRAND_SHADE;
  const focusBorderColor = error ? colors.ERROR_HIGHLIGHT : colors.BRAND_FONT_HIGHLIGHT;

  return css`
    border: 1px solid ${colors.GRAY};
    background-color: ${getBgdColor};
    color: ${colors.FONT};
    transition: all 150ms linear;

    &::selection {
      background-color: ${colors.BRAND};
      color: ${colors.WHITE};
    }

    &:hover {
      background-color: ${hoverBorderColor};
      border-color: ${focusBorderColor};
    }

    &:focus {
      border-color: ${focusBorderColor};
    }
  `;
};

export const StyledInput = styled.input<InputProps>`
  font-size: 16px;
  font-family: Roboto-Regular, sans-serif;
  letter-spacing: 0.5px;
  outline: none;
  padding-top: 0;
  padding-bottom: 0;
  margin: 0;
  flex: 1;
  min-width: 0;
  min-height: ${elementHeight};
  height: ${elementHeight};
  box-sizing: border-box;
  border-radius: ${inputBorderRadius};
  transition: all 150ms linear;
  ${getLeftPadding};
  ${getRightPadding};
  ${getColorStyles};
`;
