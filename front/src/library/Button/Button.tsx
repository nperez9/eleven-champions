import React from 'react';

import { ButtonProps } from './Button.types';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({ children, click, type = 'primary', className = '', isFullWidth = false, maxWidth = 300 }) => {
  let max = {};
  if (!isFullWidth) {
    max = {
      maxWidth
    };
  }

  return (
    <button className={`${styles.Button} ${styles[type]} ${className}`} onClick={() => { click() }} style={max}>
      {children}
    </button>
  );
};

export default Button;