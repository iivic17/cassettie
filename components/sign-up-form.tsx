import classNames from "classnames";
import { Button, Input } from "../design";
import { ComponentPropsWithChildren, Inputs } from "../types";
import { useForm, SubmitHandler } from "react-hook-form";
import { emailInputConfig, passwordInputConfig } from "../config";

type SignUpFormProps = {};

type SignUpFormInputs = Pick<Inputs, "email" | "password">;

const SignUpFormConfig = [emailInputConfig, passwordInputConfig];

export const SignUpForm = ({
  className,
  ...props
}: ComponentPropsWithChildren<"form", SignUpFormProps>) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, touchedFields },
  } = useForm<SignUpFormInputs>({
    mode: "onChange",
    shouldUseNativeValidation: false,
    shouldFocusError: true,
  });

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => console.log(data);

  const renderInputs = () =>
    SignUpFormConfig.map((item) => (
      <Input
        key={item.name}
        {...register(item.name, item.options)}
        placeholder={item.placeholder}
        type={item.type}
        errorMessage={
          !isValid && touchedFields[item.name] ? errors[item.name]?.message : ""
        }
      />
    ));

  return (
    <form
      className={classNames("flex flex-col gap-3", className)}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      {SignUpFormConfig && renderInputs()}
      <Button type="submit" className="mt-7" disabled={!isValid}>
        Login to your account
      </Button>
    </form>
  );
};
