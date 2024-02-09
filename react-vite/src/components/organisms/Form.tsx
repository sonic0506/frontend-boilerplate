import Button from "@components/atoms/Button";
import Input from "@components/atoms/Input";
import InputWithButton from "@components/molecules/InputWithButton";

export default function Form() {
  return (
    <article>
      <InputWithButton>click!</InputWithButton>
      <Input />
      <Button>click!!</Button>
    </article>
  );
}
