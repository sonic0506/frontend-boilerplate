export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export default function Input({ ...rest }: InputProps) {
  return <input {...rest} />;
}
