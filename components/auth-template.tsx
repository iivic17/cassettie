import classNames from "classnames";
import Image from "next/image";
import { ComponentPropsWithChildren } from "../types";
import logo from "/assets/logo.svg";

type AuthTemplateProps = {};

export const AuthTemplate = ({
  className,
  children,
  ...props
}: ComponentPropsWithChildren<"div", AuthTemplateProps>) => {
  return (
    <div className="relative flex min-h-[100vh] flex-1 flex-col items-center bg-blue-dark">
      <Image
        src="/assets/logo.svg"
        alt="logo"
        width={33}
        height={27}
        className="mt-16"
      />
      <div
        className={classNames(
          "mt-20 flex w-[400px] flex-col rounded-2xl bg-blue-medium py-8 px-9",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};
