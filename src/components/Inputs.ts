import styled, { css } from 'styled-components';
import { IMaskInput } from 'react-imask';

interface BaseInputStylesProps {
  fullWidth?: boolean;
  width?: string;
}

const baseInputStyles = css<BaseInputStylesProps>`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto', sans-serif;
  outline: none;
  transition: border-color 0.2s ease;
  width: ${(props) => (props.fullWidth && '100%') || props.width || 'unset'};

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 1.3;
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border-color: ${(props) => props.theme['yellow-dark']};
  }
`;

export const BaseInput = styled.input`
  ${baseInputStyles}
`;

export const CepInput = styled(IMaskInput)`
  ${baseInputStyles}
`;
