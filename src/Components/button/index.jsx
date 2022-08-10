import { Button } from "./style";

const Buttons = ({ children, size }) => {
  return <Button size={size}>{children}</Button>;
};

export default Buttons;
