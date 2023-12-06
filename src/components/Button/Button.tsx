import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  buttonText: string;
  actionOnClick?: () => void;
  className?: string;
}

const Button = ({
  buttonText,
  actionOnClick,
  className,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled className={`button ${className}`} onClick={actionOnClick}>
      {buttonText}
    </ButtonStyled>
  );
};

export default Button;
