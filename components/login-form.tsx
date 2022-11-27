import classNames from "classnames";
import { Button, Input } from "../design";
import { ComponentPropsWithChildren } from "../types";
import { useForm, SubmitHandler } from "react-hook-form";
import { ReactHookFormConfig } from "../types/react-hook-form-config";
import { useMemo } from "react";

type LoginFormProps = {};

type Inputs = {
  email: string;
  password: string;
};

const loginFormConfig: ReactHookFormConfig<Inputs> = [
  {
    name: "email",
    type: "email",
    placeholder: "Email address",
    options: {
      required: {
        value: true,
        message: "Can't be empty",
      },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Enter valid email",
      },
    },
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    options: {
      required: {
        value: true,
        message: "Can't be empty",
      },
      minLength: {
        value: 6,
        message: "Not long enough",
      },
    },
  },
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
