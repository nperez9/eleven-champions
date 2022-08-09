import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Geisha } from '../../interfaces';

import { Container } from '../../library';
import { GeishaService } from '../../services';

import Error from '../Core/Error/Error';
import DetailHeader from './DetailHeader/DetailHeader';
import PhotoGallery from './PhotoGallery/PhotoGallery';

const Detail: React.FC<any> = () => {
  const [geisha, setGeisha] = useState<Geisha | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    if (!geisha && id) {
      GeishaService.getGeishaById(id)
        .then((data) => {
          if (data) {
            setGeisha(data);
          }
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  }, [id, geisha]);

  let content = null;
  if (isLoading) {
    content = (
      <Spinner
        animation='border'
        variant='light'
        style={{
          height: '100px',
          width: '100px',
          display: 'block',
          margin: '20% auto',
        }}
      />
    );
  } else if (!isLoading && !geisha) {
    content = (
      <Error
        code={404}
        title='Pagina no encontrada'
        description='Parece que la pagina a la que estas intentando acceder no existe o fue dada de baja'
      />
    );
  } else {
    content = (
      <Container>
        <DetailHeader
          name={geisha?.name}
          coverImage={geisha?.coverImage}
          bodyInfo={geisha?.bodyInfo}
          phone={geisha?.phone}
          age={geisha?.age}
          description={geisha?.description}
        />
        <PhotoGallery photos={geisha?.photos} />
      </Container>
    );
  }

  return content;
};

export default Detail;
