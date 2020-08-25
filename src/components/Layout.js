import React from 'react';
import GlobalStyle from '../styles/global';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}
