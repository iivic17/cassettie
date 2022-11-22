import { HTMLAttributes } from "react";
import classNames from "classnames";

interface HeadingLProps extends HTMLAttributes<HTMLHeadingElement> {}

export const HeadingL = ({ className, children, ...props }: HeadingLProps) => {
  const headingLClassNames = classNames(
    "text-heading-l font-light leading-tight",
    className
  );

  return (
    <h2 {...props} className={headingLClassNames}>
      {children}
    </h2>
  );
};
