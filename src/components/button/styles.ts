import { css } from 'styled-components';
import styled from '@emotion/styled';
import { Button, ButtonProps } from '@mui/material';

const primary = css`
  && {
    background-color: #005f89;
    color: #ffffff;
    font-weight: 600;

    &:hover {
      background-color: #3385a8;
      box-shadow: none;
    }
  }
`;

const secundary = css`
  && {
    background-color: rgba(0, 95, 137, 0.5);
    color: #000000;
    font-weight: 300;
    border: 2px solid rgba(0, 95, 137, 0.5);

    &:hover {
      border: 2px solid black;
      box-shadow: none;
    }

    &:focus {
      outline: none;
    }
  }
`;

const disabledStyles = css`
  && {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

type StyleButtonProps = ButtonProps & {
  model?: 'primary' | 'secundary';
};

export const StyleButton = styled(Button)<StyleButtonProps>`
  && {
    font-size: 16px;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: none;
    text-transform: none;
    size: auto;
    white-space: nowrap;
    min-width: 7rem;

    ${({ model }) => (model === 'primary' ? primary : {})}
    ${({ model }) => (model === 'secundary' ? secundary : {})}
    ${({ disabled }) => (disabled ? disabledStyles : {})}
  }
`;
