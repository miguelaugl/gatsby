import React from 'react';
import Helmet from 'react-helmet';

import Header from './Header';
import Menu from './Menu';

import GlobalStyle from '../styles/global';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Menu />
      <GlobalStyle />
      {children}
    </>
  )
}
