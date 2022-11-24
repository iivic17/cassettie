import { ElementType } from "react";
import classNames from "classnames";
import { PolymorphicComponentProps } from "../types";
import { TextBody } from "./text-body";

type ButtonProps = {};

const defaultComponent = "button";

export const Button = <
  Component extends ElementType = typeof defaultComponent
>({
  as,
  className,
  children,
  ...props
}: PolymorphicComponentProps<Component, ButtonProps>) => {
  const Component = as || defaultComponent;

  return (
    <Component
      {...props}
      role="button"
      className={classNames(
        "pointer group flex h-12 w-full items-center justify-center rounded-md bg-red transition-colors hover:bg-white",
        className
      )}
    >
      <TextBody
        variant="m"
        className="text-white transition-colors group-hover:text-blue-medium"
      >
        {children}
      </TextBody>
    </Component>
  );
};
