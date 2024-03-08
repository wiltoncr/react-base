import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Certifique-se de usar BrowserRouter
import history from './services/history';
import GlobalStyle from './styles/GlocalStyles';
import Header from './components/Header';
import RoutesApp from './routes'; // Importe o componente que contém suas rotas

function App() {
  return (
    <BrowserRouter history={history}>
      <Header />
      <RoutesApp /> {/* Utilize o componente que contém suas rotas */}
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
