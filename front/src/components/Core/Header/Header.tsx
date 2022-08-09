import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { publicResource } from '../../../utils';
import { BSButton, Container } from '../../../library';
import { config } from '../../../config';

import styles from './Header.module.scss';
import { HeaderProps } from './Header.types';
import SideMenu from './SideMenu/SideMenu';

const CoreHeader: React.FC<HeaderProps> = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/publicate');
  };

  return (
    <>
      { navbarOpen && <SideMenu OnClose={() => {setNavbarOpen(false)}} /> }
      <Container>
        <header className={styles.Header} id="page-wrap">
          <div className={styles.MenuButton} onClick={() => {setNavbarOpen(true)}}>
            <img src={publicResource('/logo/menu-svg.svg')} alt="hamburger" width={63} />
          </div>
          <h1>
            {config.title}
          </h1>
          <BSButton OnClick={clickHandler} styleType='light' size='lg' isOutline>
            Publica!
          </BSButton>
        </header>
      </Container>
    </>
  );
};

export default CoreHeader;
