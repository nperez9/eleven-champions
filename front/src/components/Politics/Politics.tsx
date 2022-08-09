import React from 'react';

import config from '../../config';
import { Container, Card } from '../../library';

const Politics = () => {
  return (
    <Container>
      <h1>Politicas del Sitio</h1>
      <Card>
        {config.title} contiene material solo para adultos. Los requisitos para
        publicar en Gemidos.Tv son:
        <ul>
          <li>
            Contar con mayoría de edad legal dependiendo del país donde estés
            trabajando, asi como un documento para verificar dicha informacion.
          </li>
          <li>
            Las imágenes / fotos deben ser reales y con la temática del sitio
          </li>
          <li>Para publicar debes ser un acompoñante independiente.</li>
        </ul>
        <p>
          Quien ingrese a este portal por medio de la dirección {config.title}{' '}
          manifiesta explícitamente tener 18 años o mas, estar en pleno uso y
          gose de sus facultades y haber cumplido la mayoría de edad legal desde
          el país del que ingresa a {config.title}. Así mismo las anunciantes
          que deseen contratar un espacio publicitario en este sitio web
          Gemidos.Tv u otros de la red de sitios asociados deberán ser mayores
          de 18 años y comprobarlo sin excepción alguna con documentos
          oficiales, estar en pleno uso y gose de sus facultades, manifestar que
          usan este espacio para los fines que a ellas convengan sin ser
          obligadas de forma física o moral, siendo nuestro sitio {config.title}
          solo un espacio publicitario donde vendemos espacios publicitarios a
          chicas de compañía independientes que única y exclusivamente ofrecen
          servicios de acompañamiento o masajes. NO SEXO. El acuerdo al que
          lleguen las anunciantes y los visitantes de este sitio es
          responsabilidad única y exclusiva de ambas partes, deslindando a{' '}
          {config.title}
          de cualquier acuerdo pactado entre anunciantes y visitantes.
          <strong>
            {' '}
            Para publicar tu anuncio es imperativo que envies un scanner o foto
            selfie de una identificación oficial con fotografía que acredite tu
            mayoría de edad.
            {' '}
          </strong>
          Al momento de enviar tu información ya sea por medio del formulario o
          por medio de correo electrónico aceptas haber leído la presente.
          También aceptas ser legitima propietaria de las imágenes enviadas,
          siendo nuestras anunciantes las únicas y exclusivas responsables de la
          imágenes enviadas, como de los textos anexados a su publicidad. En
          caso de que alguna otra persona reclame ser legitima propietaria de
          las imágenes publicadas y lo acredite plenamente, {config.title}
          procederá a la baja inmediata del espacio publicitario contratado,
          queda establecido que como anteriormente lo explicamos, al enviar tu
          info aceptas ser legitima propietaria y responsable directa de las
          fotografías enviadas, lo cual NO representaría un timo para{' '}
          {config.title}
          Reiteramos que {config.title} solo es un medio publicitario que
          publica anuncios de acompañantes independientes y mayores de 18 años y
          no tienen ningún vinculo diferente al de prestar un espacio
          publicitario a nuestras anunciantes, deslindandonos de todo acuerdo al
          que lleguen nuestros visitantes y nuestras anunciantes. Este Sitio NO
          contiene fotografias propias, todas las fotografias enviadas al sitio
          y publicadas en los correspondientes sitios son autorizadas por el
          propietario de las mismas, y contando por ello, con su correspondiente
          copyright.
        </p>
        <h6>Atentamente, equipo de {config.title}</h6>
      </Card>
    </Container>
  );
};

export default Politics;
