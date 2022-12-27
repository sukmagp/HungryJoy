import React from 'react';
import Navigation from './Navigation/index';
import { Outlet } from 'react-router';
import Footer from '../pages/Home/Footer/Footer'

export default function WithNav() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};