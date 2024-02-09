export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export default function Button({ children, ...rest }: ButtonProps) {
  return <button {...rest}>{children}</button>;
}
