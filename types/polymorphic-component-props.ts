import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ElementType,
} from "react";

type AsProp<Component extends ElementType> = {
  as?: Component;
};

type PropsToOmit<
  Component extends ElementType,
  Props
> = keyof (AsProp<Component> & Props);

export type PolymorphicComponentProps<
  Component extends ElementType,
  Props = {}
> = PropsWithChildren<Props & AsProp<Component>> &
  Omit<ComponentPropsWithoutRef<Component>, PropsToOmit<Component, Props>>;
