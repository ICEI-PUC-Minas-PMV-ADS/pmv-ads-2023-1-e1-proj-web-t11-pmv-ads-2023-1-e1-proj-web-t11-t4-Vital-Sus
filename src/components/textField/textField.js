import { StyledTextField } from './styles';

const TextFieldVT = ({ label, model, fullWidth, required }) => {
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
