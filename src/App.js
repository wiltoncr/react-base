import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/GlocalStyles';
import Header from './components/Header';
import RoutesApp from './routes';

function App() {
  return (
    <Router>
      <Header />
      <RoutesApp />
      <GlobalStyle />
    </Router>
  );
}

export default App;
