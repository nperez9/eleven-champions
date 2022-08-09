import React from 'react';

import { ErrorProps } from './Error.types';

import style from './Error.module.scss';

const Error: React.FC<ErrorProps> = ({ code, title, description }) => {
  return (
    <div className={style.Error}>
      <h1>Error {code}</h1>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Error;