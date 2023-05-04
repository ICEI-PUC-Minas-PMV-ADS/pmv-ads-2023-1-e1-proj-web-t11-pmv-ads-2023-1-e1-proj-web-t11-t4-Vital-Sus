import { StyleButton } from './slytes';

const ButtonVT = ({ label, onClick, model }) => {
  return (
    <StyleButton variant="contained" onClick={onClick} model={model}>
      {label}
    </StyleButton>
  );
};

export default ButtonVT;
