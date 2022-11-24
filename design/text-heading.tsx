import { ElementType } from "react";
import classNames from "classnames";
import { PolymorphicComponentProps, TextVariants } from "../types";

type TextHeadingVariants = Pick<TextVariants<string>, "xs" | "s" | "m" | "l">;

type TextHeadingProps = {
  variant: keyof TextHeadingVariants;
};

const textHeadingClassNames: TextHeadingVariants = {
  xs: "text-heading-xs font-medium leading-relaxed",
  s: "text-heading-s font-medium leading-normal",
  m: "text-heading-m font-light leading-snug",
  l: "text-heading-l font-light leading-tight",
};

const defaultComponent = "span";

export const TextHeading = <
  Component extends ElementType = typeof defaultComponent
>({
  as,
  variant,
  className,
  children,
  ...props
}: PolymorphicComponentProps<Component, TextHeadingProps>) => {
  const Component = as || defaultComponent;

  return (
    <Component
      {...props}
      className={classNames(textHeadingClassNames[variant], className)}
    >
      {children}
    </Component>
  );
};
