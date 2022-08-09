import { ReactNode } from "react";

export type ButtonType = 'primary' | 'secondary';

export interface ButtonProps {
  children: ReactNode;
  click: Function;
  type?: ButtonType;
  className?: string;
  isFullWidth?: boolean;
  maxWidth?: number;
}