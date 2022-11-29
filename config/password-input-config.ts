import { ReactHookInputConfig } from "../types";

export const passwordInputConfig: ReactHookInputConfig<"password"> = {
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
    deps: ["repeatPassword"],
  },
};
