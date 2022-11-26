import classNames from "classnames";
import { ComponentPropsWithoutChildren } from "../types";
import { TextBody } from "./text-body";

type InputProps = {
  containerClassName?: string;
};

export const Input = ({
  className,
  containerClassName,
  placeholder,
  ...props
}: ComponentPropsWithoutChildren<"input", InputProps>) => {
  const hasError = false;

  const renderErrorMessage = () => (
    <div className="absolute top-1/2 right-6 z-10 flex h-3/4 -translate-y-1/2 items-center justify-center bg-[inherit] pl-3">
      <TextBody variant="s" className="text-red">
        Can&apos;t be empty
      </TextBody>
    </div>
  );

  return (
    <div
      className={classNames("relative w-full bg-[inherit]", containerClassName)}
    >
      <input
        {...props}
        className={classNames(
          "block w-full border-0 border-b-2 border-blue-light bg-transparent py-4 px-6 text-body-m font-light text-white caret-red transition-colors placeholder:text-white-light placeholder:transition-colors focus:border-white focus:outline-none focus:ring-0 focus:placeholder:text-white",
          {
            "border-red focus:border-red": hasError,
          },
          className
        )}
        placeholder={placeholder}
      />
      {hasError && renderErrorMessage()}
    </div>
  );
};
