import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ElementType,
} from "react";

export type ComponentPropsWithChildren<
  Component extends ElementType,
  Props = {}
> = PropsWithChildren<Props> &
  Omit<ComponentPropsWithoutRef<Component>, keyof Props>;
