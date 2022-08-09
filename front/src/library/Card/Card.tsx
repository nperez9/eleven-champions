import React from 'react';

import styles from './Card.module.scss';
import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = ({ children,  classname = '', isFooterCard = false}) => {
  const additionalClass =  isFooterCard ? styles.FooterCard : '';

  return (
    <div className={`${styles.Card} ${classname} ${additionalClass}`}> 
      {children} 
    </div>
  );
};

export default Card;
