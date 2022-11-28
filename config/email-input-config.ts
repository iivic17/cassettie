import { Inputs } from "./../types/inputs";
import { ReactHookInputConfig } from "../types";

export const emailInputConfig: ReactHookInputConfig<"email"> = {
  name: "email",
  type: "email",
  placeholder: "Email address",
  options: {
    required: {
      value: true,
      message: "Can't be empty",
    },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Enter valid email",
    },
  },
};
