import { ElementType } from "react";
import classNames from "classnames";
import { PolymorphicComponentProps, TextVariants } from "../types";

type TextHeadingVariants = Pick<TextVariants<string>, "s" | "m">;

type TextBodyProps = {
  variant: keyof TextHeadingVariants;
};

const textBodyClassNames: TextHeadingVariants = {
  s: "text-body-s font-light leading-relaxed",
  m: "text-body-m font-light leading-relaxed",
};

const defaultComponent = "span";

export const TextBody = <
  Component extends ElementType = typeof defaultComponent
>({
  as,
  variant,
  className,
  children,
  ...props
}: PolymorphicComponentProps<Component, TextBodyProps>) => {
  const Component = as || defaultComponent;

  return (
    <Component
      {...props}
      className={classNames(textBodyClassNames[variant], className)}
    >
      {children}
    </Component>
  );
};
