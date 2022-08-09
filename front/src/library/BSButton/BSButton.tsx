import React from 'react';
import { BOButtonProps } from './BSButton.types';

const BSButton: React.FC<BOButtonProps> = ({ className = '', styleType = 'primary', isOutline = false, disabled = false, children, size = '', role = 'button' }) => {
  let button = null;
  let buttonStyle = isOutline ? `btn-outline-${styleType}` : `btn-${styleType}`;
  if (size) {
    buttonStyle += ` btn-${size}`;
  }

  button = (
    <button className={`btn ${buttonStyle} ${className}`} disabled={disabled} type={role}>
      {children}
    </button>
  );

  return button;
};

export default BSButton;
