import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import MyRoute from './MyRoutes';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<MyRoute PageComponent={Login} />} />
      <Route path="*" element={<MyRoute PageComponent={Page404} isClosed />} />
    </Routes>
  );
}
