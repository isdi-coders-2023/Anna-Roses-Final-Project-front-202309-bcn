import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  buttonText: string;
  actionOnClick?: () => void;
}

const Button = ({
  buttonText,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled className="button" onClick={actionOnClick}>
      {buttonText}
    </ButtonStyled>
  );
};

export default Button;
