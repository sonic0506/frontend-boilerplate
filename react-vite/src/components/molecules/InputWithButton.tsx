import Button, { ButtonProps } from "@components/atoms/Button";
import Input, { InputProps } from "@components/atoms/Input";

export interface InputWithButtonProps {
  inputProps?: InputProps;
  buttonProps?: ButtonProps;
  children?: React.ReactNode;
}

export default function InputWithButton({
  children,
  inputProps,
  buttonProps,
}: InputWithButtonProps) {
  return (
    <div>
      <Input {...inputProps} />
      <Button {...buttonProps}>{children}</Button>
    </div>
  );
}
