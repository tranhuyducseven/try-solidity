export const CustomCheckableInput: IComponent<{
  text: string;
  check: boolean;
  name?: string;
  type?: "checkbox" | "radio";
}> = ({ text, check, name = "checkbox", type = "checkbox" }) => {
  return (
    <>
      <span>{text}</span>
      <span>
        <input type={type} name={name} checked={check} readOnly />
        <span className="checkmark" />
      </span>
    </>
  );
};
