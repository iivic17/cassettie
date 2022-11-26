import { ComponentPropsWithoutRef, ElementType } from "react";

export type ComponentPropsWithoutChildren<
  Component extends ElementType,
  Props = {}
> = Props & Omit<ComponentPropsWithoutRef<Component>, keyof Props | "children">;
