import React from 'react';

import { publicResource } from '../../../utils';
import styles from './PhotoGallery.module.scss';
import { PhotoGalleryProps } from './PhotoGallery.types';

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos = [], name }) => {
  const images = photos.map((p, i) => (
    <img src={publicResource(p)} alt={name} key={`${name}-${i}`} />
  ));

  return <div className={styles.PhotoGallery}>{images}</div>;
};

export default PhotoGallery;
