import classNames from "classnames";
import { ComponentPropsWithRef, forwardRef } from "react";
import { ComponentPropsWithoutChildren } from "../types";
import { ForwardedRef } from "../types/forwarded-ref";
import { TextBody } from "./text-body";

type InputProps = {
  containerClassName?: string;
  errorMessage?: string;
};

const componentType = "input";

export const Input = forwardRef(
  (
    {
      className,
      containerClassName,
      placeholder,
      errorMessage,
      ...props
    }: ComponentPropsWithoutChildren<typeof componentType, InputProps>,
    ref?: ForwardedRef<typeof componentType>
  ) => {
    const hasError = errorMessage && errorMessage.length > 0;

    const renderErrorMessage = () => (
      <div className="absolute top-1/2 right-4 z-10 flex h-3/4 -translate-y-1/2 items-center justify-center bg-[inherit] pl-3">
        <TextBody variant="s" className="text-red">
          {errorMessage}
        </TextBody>
      </div>
    );

    return (
      <div
        className={classNames(
          "relative w-full bg-[inherit]",
          containerClassName
        )}
      >
        <input
          {...props}
          className={classNames(
            "block w-full border-0 border-b-[1.5px] border-blue-light bg-transparent py-3 px-4 text-body-m font-light text-white caret-red transition-colors placeholder:text-white-light placeholder:transition-colors focus:border-white focus:outline-none focus:ring-0 focus:placeholder:text-white",
            {
              "border-red focus:border-red": hasError,
            },
            className
          )}
          placeholder={placeholder}
          ref={ref}
        />
        {hasError && renderErrorMessage()}
      </div>
    );
  }
);

Input.displayName = "Input";
