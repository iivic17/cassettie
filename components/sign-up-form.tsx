import classNames from "classnames";
import { Button, Input } from "../design";
import { ComponentPropsWithChildren, Inputs } from "../types";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  emailInputConfig,
  passwordInputConfig,
  repeatPasswordInputConfig,
} from "../config";
import { useRef } from "react";

type SignUpFormProps = {};

type SignUpFormInputs = Pick<Inputs, "email" | "password" | "repeatPassword">;

const signUpFormConfig = [
  emailInputConfig,
  passwordInputConfig,
  repeatPasswordInputConfig,
];

export const SignUpForm = ({
  className,
  ...props
}: ComponentPropsWithChildren<"form", SignUpFormProps>) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid, errors, touchedFields },
  } = useForm<SignUpFormInputs>({
    mode: "onChange",
    shouldUseNativeValidation: false,
    shouldFocusError: true,
  });

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => console.log(data);

  const renderInputs = () =>
    signUpFormConfig.map((item) => {
      if (item.name === "repeatPassword") {
        item.options.validate = (value: string) => {
          if (watch("password") != value) {
            return "Passwords don't match";
          }
        };
      }

      return (
        <Input
          key={item.name}
          {...register(item.name, item.options)}
          placeholder={item.placeholder}
          type={item.type}
          errorMessage={
            !isValid && touchedFields[item.name]
              ? errors[item.name]?.message
              : ""
          }
        />
      );
    });

  return (
    <form
      className={classNames("flex flex-col gap-3", className)}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      {signUpFormConfig && renderInputs()}
      <Button type="submit" className="mt-7" disabled={!isValid}>
        Login to your account
      </Button>
    </form>
  );
};
