import { Buttons } from "./style";

const Button = ({ children, size }) => {
  return <Buttons size={size}>{children}</Buttons>;
};

export default Button;
