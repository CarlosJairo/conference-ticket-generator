import { useForm, type SubmitHandler } from "react-hook-form";
import Button from "../../atoms/button/Button";
import TextInput from "../../molecules/TextInput/TextInput";
import UploadInput from "../../molecules/UploadInput/UploadInput";
import useShowTicket from "../../../hooks/useShowTicket/useShowTicket";
import { useUserStore } from "../../../store/user";

type Inputs = {
  fullName: string;
  email: string;
  githubUser: string;
};

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const { setShowTicket } = useShowTicket();
  const { setUser } = useUserStore();

  const sendForm: SubmitHandler<Inputs> = (data: Inputs) => {
    const { fullName, email, githubUser } = data;

    setShowTicket(true);

    setUser({
      fullName,
      email,
      githubUser,
    });
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
          {...register("fullName", { required: "Full name is required" })}
          isError={errors.fullName?.type === "required"}
          errorMessage={errors.fullName?.message}
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
