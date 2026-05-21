import Button from "../../atoms/button/Button";
import TextInput from "../../molecules/TextInput/TextInput";
import UploadInput from "../../molecules/UploadInput/UploadInput";

const Form = () => {
  return (
    <div>
      <UploadInput />
      <div className="flex flex-col gap-4 pt-4">
        <TextInput label="Full name" placeholder="Jonathan Kirstof" />
        <TextInput
          label="Email address"
          placeholder="jonatan@email.com"
          type="email"
        />
        <TextInput label="Github username" placeholder="@jonatankristof0101" />
        <Button />
      </div>
    </div>
  );
};

export default Form;
