import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  buttonText: string;
  actionOnClick?: () => void;
  type: "button" | "submit";
}

const Button = ({
  buttonText,
  actionOnClick,
  type,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled className="button" onClick={actionOnClick} type={type}>
      {buttonText}
    </ButtonStyled>
  );
};

export default Button;
