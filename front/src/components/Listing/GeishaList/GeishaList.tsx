import React from 'react';
import { Container } from '../../../library';

import GeishaItem from './GeishaItem';
import styles from './GeishaList.module.scss';
import { GeishaListProps } from './GeishaList.types';

const GeishaList: React.FC<GeishaListProps> = ({ geishaList }) => {
  const content = geishaList.map(g => {
    return <GeishaItem geisha={g} key={g.id} />
  });
  
  return (
    <Container className={styles.GeishaList}>
      {content}
    </Container>
  );
}

export default GeishaList;