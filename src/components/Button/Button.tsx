import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  buttonText: string;
}

const Button = ({ buttonText }: ButtonProps): React.ReactElement => {
  return <ButtonStyled className="button">{buttonText}</ButtonStyled>;
};

export default Button;
