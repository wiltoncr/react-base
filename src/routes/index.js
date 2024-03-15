import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Register from '../pages/Register';
import Fotos from '../pages/Fotos';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import MyRoute from './MyRoutes';

export default function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/" element={<MyRoute PageComponent={Alunos} />} />
      <Route
        exact
        path="/aluno/:id/edit"
        element={<MyRoute PageComponent={Aluno} isClosed />}
      />
      <Route
        exact
        path="/aluno"
        element={<MyRoute PageComponent={Aluno} isClosed />}
      />
      <Route
        exact
        path="/fotos/:id"
        element={<MyRoute PageComponent={Fotos} isClosed />}
      />
      <Route exact path="/login" element={<MyRoute PageComponent={Login} />} />
      <Route
        exact
        path="/register"
        element={<MyRoute PageComponent={Register} />}
      />
      <Route path="*" element={<MyRoute PageComponent={Page404} />} />
    </Routes>
  );
}
