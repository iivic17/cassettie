import { ReactHookInputConfig } from "../types";

export const passwordInputConfig: ReactHookInputConfig = {
  name: "password",
  type: "password",
  placeholder: "Password",
  options: {
    required: {
      value: true,
      message: "Can't be empty",
    },
    minLength: {
      value: 6,
      message: "Not long enough",
    },
  },
} as const;
