import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/GlocalStyles';
import Header from './components/Header';
import RoutesApp from './routes';

function App() {
  return (
    <Router>
      <Header />
      <RoutesApp />
      <GlobalStyle />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
}

export default App;
