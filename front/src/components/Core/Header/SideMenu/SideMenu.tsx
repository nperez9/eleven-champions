import React from 'react';

import { SideMenuProps } from './SideMenu.types';

import styles from './SideMenu.module.scss';
import { Link } from 'react-router-dom';

const SideMenu: React.FC<SideMenuProps> = ({ OnClose }) => {
  return (
    <div className={styles.SideMenu}>
      <nav>
        <button onClick={OnClose} type="button" className={`${styles.CloseButton} btn-close btn-close-white`} aria-label="Close" />
        <div className={styles.LinkContainer}>
          <Link className={styles.menuItem} to="/">
            Inicio
          </Link>
          <Link className={styles.menuItem} to="/legals">
            Legales
          </Link>
          <Link className={styles.menuItem} to="/politics">
            Politicas
          </Link>
        </div>
      </nav>
      <div className={styles.CloseArea} onClick={OnClose}> 

      </div>
    </div>
  );
};

export default SideMenu;