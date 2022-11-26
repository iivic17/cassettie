import classNames from "classnames";
import { ComponentPropsWithoutChildren } from "../types";

type InputProps = {};

export const Input = ({
  className,
  ...props
}: ComponentPropsWithoutChildren<"input", InputProps>) => {
  return (
    <input
      {...props}
      className={classNames(
        "block w-full border-0 border-b-2 border-blue-light bg-transparent py-4 px-6 text-body-m font-light text-white caret-red transition-colors placeholder:text-white-light placeholder:transition-colors focus:border-white focus:outline-none focus:ring-0 focus:placeholder:text-white",
        className
      )}
      placeholder="Email address"
    />
  );
};
