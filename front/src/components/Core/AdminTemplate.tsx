import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IAppState, IAuthState } from '../../store';
import AdminHeader from './AdminHeader/AdminHeader';

const AdminTemplate = ({ children }: { children?: React.ReactChild }) => {
  const auth = useSelector<IAppState, IAuthState>((state) => state.auth);
  const navigate = useNavigate();

  if (!auth.isLogged) {
    navigate('/login');
    return null;
  }

  return (
    <>
      <AdminHeader />
      {children}
    </>
  );
};

export default AdminTemplate;
