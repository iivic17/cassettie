import { ReactHookInputConfig } from "../types";

export const repeatPasswordInputConfig: ReactHookInputConfig<"repeatPassword"> =
  {
    name: "repeatPassword",
    type: "password",
    placeholder: "Repeat password",
    options: {
      required: {
        value: true,
        message: "Can't be empty",
      },
      minLength: {
        value: 6,
        message: "Not long enough",
      },
      deps: ["password"],
    },
  };
