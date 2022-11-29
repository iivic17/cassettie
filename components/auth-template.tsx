import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { TextHeading } from "../design";
import { ComponentPropsWithChildren } from "../types";

type AuthTemplateProps = {
  heading: string;
};

export const AuthTemplate = ({
  className,
  heading,
  children,
  ...props
}: ComponentPropsWithChildren<"div", AuthTemplateProps>) => {
  return (
    <div className="relative flex min-h-[100vh] flex-1 flex-col items-center bg-blue-dark">
      <Link href="/">
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={33}
          height={27}
          className="mt-16"
        />
      </Link>
      <div
        className={classNames(
          "mt-20 flex w-[400px] flex-col rounded-2xl bg-blue-medium py-8 px-9",
          className
        )}
        {...props}
      >
        <TextHeading variant="l" className="text-white">
          {heading}
        </TextHeading>
        {children}
      </div>
    </div>
  );
};
