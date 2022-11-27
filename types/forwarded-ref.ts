import { ComponentPropsWithRef, ElementType } from "react";

export type ForwardedRef<Component extends ElementType> =
  ComponentPropsWithRef<Component>["ref"];
