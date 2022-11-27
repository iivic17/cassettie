import classNames from "classnames";
import { Button, Input } from "../design";
import { ComponentPropsWithChildren } from "../types";

type LoginFormProps = {};

export const LoginForm = ({
  className,
  ...props
}: ComponentPropsWithChildren<"form", LoginFormProps>) => {
  return (
    <form className={classNames("flex flex-col gap-3", className)} {...props}>
      <Input placeholder="Email address" type="email" />
      <Input placeholder="Password" type="password" />
      <Button className="mt-7">Login to your account</Button>
    </form>
  );
};
