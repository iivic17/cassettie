import { HTMLAttributes } from "react";
import classNames from "classnames";

interface TextBodyProps
  extends HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  span?: boolean;
  type: "xs" | "s" | "m" | "l";
}

export const TextHeading = ({
  span,
  type,
  className,
  children,
  ...props
}: TextBodyProps) => {
  const textHeadingClassNames = {
    xs: "text-heading-xs font-medium leading-relaxed",
    s: "text-heading-s font-medium leading-normal",
    m: "text-heading-m font-light leading-snug",
    l: "text-heading-l font-light leading-tight",
  };

  const getHeadingElement = () => {
    switch (type) {
      case "xs":
        return "h5";
      case "s":
        return "h4";
      case "m":
        return "h3";
      case "l":
        return "h2";
    }
  };

  const TextHeadingElement = getHeadingElement();

  return (
    <TextHeadingElement
      {...props}
      className={classNames(textHeadingClassNames[type], className)}
    >
      {children}
    </TextHeadingElement>
  );
};
