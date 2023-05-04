import styled, { css } from 'styled-components';
import { Button } from '@mui/material';

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

    &:hover {
      border: 2px solid black;
      box-shadow: none;
    }
  }
`;

export const StyleButton = styled(Button)`
  && {
    font-size: 16px;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: none;
    text-transform: none;

    ${({ model }) => model === 'primary' && primary}
    ${({ model }) => model === 'secundary' && secundary}
  }
`;
