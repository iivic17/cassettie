import { HTMLAttributes } from "react";
import classNames from "classnames";

interface TextBodyProps
  extends HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  span?: boolean;
  type: "s" | "m";
}

export const TextBody = ({
  span,
  type,
  className,
  children,
  ...props
}: TextBodyProps) => {
  const textBodyClassNames = {
    s: "text-body-s font-light leading-relaxed max-w-sm",
    m: "text-body-m font-light leading-relaxed max-w-sm",
  };

  const TextBodyElement = span ? "span" : "p";

  return (
    <TextBodyElement
      {...props}
      className={classNames(textBodyClassNames[type], className)}
    >
      {children}
    </TextBodyElement>
  );
};
