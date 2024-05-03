import React, { FC } from 'react';
import Footer from '../Footer';
import Header from '../Header';

interface ILayoutContent {
  children: React.ReactNode;
}

const MainLayout: FC<ILayoutContent> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
