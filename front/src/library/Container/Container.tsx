import React from 'react';

import styles from './Container.module.scss';
import { ContainerProps } from './Container.types';

const Container: React.FC<ContainerProps> = ({ children,  className = ''}) => {
  return <div className={`${styles.container} ${className}`}> {children} </div>;
};

export default Container;
