import classNames from "classnames";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Input } from "../design";
import { ComponentPropsWithChildren, ReactHookFormConfig } from "../types";
import { emailInputConfig, passwordInputConfig } from "../config";

type LoginFormProps = {};

type Inputs = {
  email: string;
  password: string;
};

const loginFormConfig: ReactHookFormConfig = [
  emailInputConfig,
  passwordInputConfig,
];

export const LoginForm = ({
  className,
  ...props
}: ComponentPropsWithChildren<"form", LoginFormProps>) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, touchedFields },
  } = useForm<Inputs>({
    mode: "onChange",
    shouldUseNativeValidation: false,
    shouldFocusError: true,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
