import { HTMLInputTypeAttribute } from "react";
import { RegisterOptions } from "react-hook-form";

export type ReactHookInputConfig<T> = {
  name: T;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  options: RegisterOptions;
};
