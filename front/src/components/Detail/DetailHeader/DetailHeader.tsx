import React from 'react';

import { publicResource, buildWhatsAppUrl } from '../../../utils';

import styles from './DetailHeader.module.scss';
import { DetailHeaderProps, HeaderInfoProps } from './DetailHeader.types';

const DetailHeader: React.FC<DetailHeaderProps> = ({ name = 'geisha', coverImage = '', bodyInfo = {}, phone = '', age, description }) => {
  //@ts-ignore
  const { measures, heigth, bioType, eyesColor, skin  } = bodyInfo;

  const HeaderInfo: React.FC<HeaderInfoProps> = ({ title, value }) => {
    return value && title ? (
      <div className={styles.BodyInfoItem}>
        <span>{title}: </span>
        <span>{value}</span>
      </div>
    ) : null;
  }

  return (
    <section className={styles.DetailHeader} id="header">
      <div className={styles.Title}>
        <div className={styles.CoverImage} style={{ backgroundImage: `url("${publicResource(coverImage)}")` }} aria-label="cover-image" />
        <div className={styles.Info}>
          <h2>
            {name}
            <a className={`btn btn-success ${styles.whatsApp}`} href={buildWhatsAppUrl(phone, name)} target="_blank" rel="noreferrer">
              <img src={publicResource('/assets/icons/ws-icon.webp')} alt="Whatsapp-logo" />
              {phone}
            </a>
          </h2>
          <div className={styles.BodyInfo}>
            <HeaderInfo title="Edad" value={age} />
            <HeaderInfo title="Medidas" value={`${measures?.tits}-${measures?.waist}-${measures?.butt}`} />
            <HeaderInfo title="Altura" value={`${heigth} cm`} />
            <HeaderInfo title="Tipo de Cuerpo" value={bioType} />
            <HeaderInfo title="Color de ojos" value={eyesColor} />
            <HeaderInfo title="Color de piel" value={skin} />
          </div>
          <div className={styles.Description} >{description}</div>
        </div>  
      </div>
    </section>
  );
};

export default DetailHeader;
