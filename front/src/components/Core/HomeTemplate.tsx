import React from 'react';
import Footer from './Footer';
import Header from './Header';

const HomeTemplate: React.FC<any> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HomeTemplate;
