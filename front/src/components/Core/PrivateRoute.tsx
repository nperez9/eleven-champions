import React from 'react';
import { useSelector } from 'react-redux';
import { Route, useNavigate } from 'react-router-dom';

import { IAppState, IAuthState } from '../../store';

interface PrivateRouteProps {
  path: string;
  Component: React.FC<any>;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  Component,
  path,
}) => {
  const { isLogged } = useSelector<IAppState, IAuthState>(
    (state) => state.auth
  );
  const navigate = useNavigate();

  let content = null;
  if (isLogged) {
    content = <Component />;
  }
  else {
    navigate('./login');
    return null;
  }

  return <Route path={path} element={content} />;
};
