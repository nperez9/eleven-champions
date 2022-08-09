import React from 'react';
import { useNavigate } from 'react-router-dom';

import { publicResource } from '../../../utils';
import styles from './GeishaItem.module.scss';
import { GeishaItemProps } from './GeishaList.types';

const GeishaItem: React.FC<GeishaItemProps> = ({ geisha }) => {
  const { id, coverImg, name, age, isAvailable, place } = geisha;
  const navigate = useNavigate();
  
  const goToDetail = () => {
    navigate(`/detail/${id}/${name}`);
  };

  return (
    <section className={styles.GeishaItem} style={{backgroundImage: `url("${publicResource(coverImg)}")`}} onClick={goToDetail} > 
      <div className={styles.Info}>
        <span className={styles.Name}>{name.toUpperCase()} {age} </span>
        <span className={styles.Place}>{place}</span>
        <span className={styles.IsAvailable}>{isAvailable}</span>
      </div>
    </section>
  );
};

export default GeishaItem;