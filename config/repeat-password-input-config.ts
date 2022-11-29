import { ReactHookInputConfig } from "../types";
import { UseFormWatch } from "react-hook-form";

const repeatPasswordInputConfig: ReactHookInputConfig<"repeatPassword"> = {
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

export const createRepeatPasswordInputConfig = (watch: UseFormWatch<any>) => {
  repeatPasswordInputConfig.options.validate = (value: string) => {
    if (watch("password") != value) {
      return "Passwords don't match";
    }
  };

  return repeatPasswordInputConfig;
};
