import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyle from './styles/GlocalStyles';
import Header from './components/Header';
import RoutesApp from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <RoutesApp />
        <GlobalStyle />
        <ToastContainer autoClose={3000} className="toast-container" />
      </Router>
    </Provider>
  );
}

export default App;
