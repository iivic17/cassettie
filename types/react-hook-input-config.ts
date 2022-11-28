import { HTMLInputTypeAttribute } from "react";
import { RegisterOptions } from "react-hook-form";

export type ReactHookInputConfig = {
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  options?: RegisterOptions;
};
