import { Buttons } from "./style";

const Button = ({ children, size, ...rest }) => {
  return (
    <Buttons {...rest} size={size}>
      {children}
    </Buttons>
  );
};

export default Button;
