import { useForm, type SubmitHandler } from "react-hook-form";
import Button from "../../atoms/button/Button";
import TextInput from "../../molecules/TextInput/TextInput";
import UploadInput from "../../molecules/UploadInput/UploadInput";

type Inputs = {
  fullname: string;
  email: string;
  githubUser: string;
};

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const sendForm: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log("send Form");
    console.log(data);
  };

  return (
    <div>
      <UploadInput />
      <form
        className="flex flex-col gap-4 pt-4"
        onSubmit={handleSubmit(sendForm)}
      >
        <TextInput
          label="Full name"
          placeholder="Jonathan Kirstof"
          {...register("fullname", { required: "Full name is required" })}
          isError={errors.fullname?.type === "required"}
          errorMessage={errors.fullname?.message}
        />
        <TextInput
          label="Email address"
          placeholder="jonatan@email.com"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
              message: "Provide a valid email.",
            },
          })}
          isError={!!errors.email}
          errorMessage={errors.email?.message}
        />
        <TextInput
          label="Github username"
          placeholder="@jonatankristof0101"
          {...register("githubUser")}
        />
        <Button />
      </form>
    </div>
  );
};

export default Form;
