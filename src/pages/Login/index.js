import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Form } from './styled';
import { Container } from '../../styles/GlocalStyles';
import * as actios from '../../store/modules/auth/actions';

export default function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const prevPath = get(props, 'location.state.prevPath', '/');

  useEffect(() => {
    if (isLoggedIn) {
      navigate(prevPath); // Limpe o caminho de redirecionamento
    }
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = false;

    if (password.length < 3 || password.length > 255) {
      formErrors = true;
      toast.error('Senha inválida');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('email informado é invalido');
    }

    // eslint-disable-next-line no-useless-return
    if (formErrors) return;
    dispatch(actios.loginRequest({ email, password, prevPath }));
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Seu Senha"
        />
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}
