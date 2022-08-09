import React from 'react';

import { Link } from 'react-router-dom';
import config from '../../../config';
import { Container } from '../../../library';
import style from './Footer.module.scss';

const Footer: React.FC<{}> = () => {
  return (
    <Container>
      <footer className={style.Footer}>
        <div className={style.LinkList}>
          <Link to="/" className="btn btn-outline-light">Home</Link>
          <Link to="/legals" className="btn btn-outline-light">Legales</Link>
          <Link to="/politics" className="btn btn-outline-light">Politicas</Link>
          <Link to="/terms" className="btn btn-outline-light">Publica</Link>
        </div>
        <div className={style.Legal}>
          © 2022 Todos los derechos reservados | { config.title }
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
