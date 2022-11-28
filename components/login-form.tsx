import classNames from "classnames";
import { Button, Input } from "../design";
import { ComponentPropsWithChildren, Inputs } from "../types";
import { useForm, SubmitHandler } from "react-hook-form";
import { emailInputConfig, passwordInputConfig } from "../config";

type LoginFormProps = {};

type LoginFormInputs = Pick<Inputs, "email" | "password">;

const loginFormConfig = [emailInputConfig, passwordInputConfig];

export const LoginForm = ({
  className,
  ...props
}: ComponentPropsWithChildren<"form", LoginFormProps>) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, touchedFields },
  } = useForm<LoginFormInputs>({
    mode: "onChange",
    shouldUseNativeValidation: false,
    shouldFocusError: true,
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => console.log(data);

  const renderInputs = () =>
    loginFormConfig.map((item) => (
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
      {loginFormConfig && renderInputs()}
      <Button type="submit" className="mt-7" disabled={!isValid}>
        Login to your account
      </Button>
    </form>
  );
};
