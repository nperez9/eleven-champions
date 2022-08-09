export type ButtonType = 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';

export type ButtonSize = '' | 'sm' | 'lg';

export type ButtonRole = 'button' | 'submit' | 'reset';

export interface BOButtonProps {
  OnClick: () => void;
  styleType?: ButtonType;
  isOutline?: boolean;
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  role?: ButtonRole; 
}

