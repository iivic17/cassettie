import { HTMLInputTypeAttribute } from "react";
import { RegisterOptions } from "react-hook-form";

export type ReactHookFormConfig<Inputs extends {}> = {
  name: keyof Inputs;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  options?: RegisterOptions;
}[];
