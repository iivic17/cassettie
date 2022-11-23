import { ElementType } from "react";
import classNames from "classnames";
import { PolymorphicComponentProps } from "../../types";

type Variants = {
  s: string;
  m: string;
};

type TextBodyProps = {
  type: keyof Variants;
};

const textBodyClassNames: Variants = {
  s: "text-body-s font-light leading-relaxed",
  m: "text-body-m font-light leading-relaxed",
};

const defaultComponent = "span";

export const TextBody = <
  Component extends ElementType = typeof defaultComponent
>({
  as,
  type,
  className,
  children,
  ...props
}: PolymorphicComponentProps<Component, TextBodyProps>) => {
  const Component = as || defaultComponent;

  return (
    <Component
      {...props}
      className={classNames(textBodyClassNames[type], className)}
    >
      {children}
    </Component>
  );
};
