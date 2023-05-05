import { StyledTextField } from './styles';

export interface TextFieldVTProps {
  label: string;
  fullWidth?: boolean;
  onClick?: () => void;
  required?: boolean;
  model?: 'primary' | 'secundary';
}

const TextFieldVT = ({
  label,
  model,
  fullWidth,
  required,
}: TextFieldVTProps) => {
  return (
    <StyledTextField
      label={label}
      variant="outlined"
      size="small"
      model={model}
      fullWidth={fullWidth}
      required={required}
    ></StyledTextField>
  );
};

export default TextFieldVT;
