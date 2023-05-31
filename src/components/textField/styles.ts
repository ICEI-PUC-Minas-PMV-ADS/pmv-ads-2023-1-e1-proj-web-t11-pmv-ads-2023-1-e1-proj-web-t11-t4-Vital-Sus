import { css } from 'styled-components';
import styled from '@emotion/styled';
import { TextField, TextFieldProps } from '@mui/material';

const primary = css({
  '& label': {
    color: 'black',
    fontSize: '14px',
  },
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
});

const secundary = css({
  '& label': {
    color: 'white',
    fontSize: '14px',
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

const tertiary = css({
  '& label': {
    color: '#005F89',
    fontSize: '14px',
  },
  '& label.Mui-focused': {
    color: '#005F89',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#005F89',
  },
  '& .MuiInputBase-input': {
    color: '#005F89',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#005F89',
    },
    '&:hover fieldset': {
      borderColor: '#005F89',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#005F89',
    },
  },
});

type StyleTextFieldProps = TextFieldProps & {
  model?: 'primary' | 'secundary' | 'tertiary';
};

export const StyledTextField = styled(TextField)<StyleTextFieldProps>`
  & .MuiInputBase-root {
    width: 300px;
  }
  ${({ model }) => (model === 'primary' ? primary : {})}
  ${({ model }) => (model === 'secundary' ? secundary : {})}
  ${({ model }) => (model === 'tertiary' ? tertiary : {})}
`;
