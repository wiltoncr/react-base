import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
