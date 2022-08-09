import React, { useContext, useEffect, useState } from 'react';
import { Firestore } from 'firebase/firestore/lite';

import GeishaList from './GeishaList/GeishaList';
import { GeishaItem } from '../../interfaces';
import { GeishaService } from '../../services';
import FireBaseContext from '../../context/firebase-context';

const Listing: React.FC<any> = () => {
  const { db } = useContext(FireBaseContext);
  const [list, setList] = useState<Array<GeishaItem>>([]);


  useEffect(() => {
    GeishaService.getList().then(gl => {
      setList(gl);
    });

    GeishaService.getGeishaList(db as Firestore).then(gl => {
      console.info(gl);
    });
  }, []);

  return <div> <GeishaList geishaList={list} /></div>;
};

export default Listing;
