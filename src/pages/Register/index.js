import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Container } from '../../styles/GlocalStyles';
import { Form } from './styled';
import axios from '../../services/axios';

export default function Register() {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('nome deve ter entre 3 e 255 caracters');
    }

    if (password.length < 3 || password.length > 255) {
      formErrors = true;
      toast.error('senha deve ter entre 3 e 255 caracters');
    }

    if (email.length < 3 || email.length > 255) {
      formErrors = true;
      toast.error('email deve ter entre 3 e 255 caracters');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('email informado é invalido');
    }

    // eslint-disable-next-line no-useless-return
    if (formErrors) return;

    try {
      await axios.post('/users', {
        nome,
        password,
        email,
      });
      toast.success('Cadastro realizado com sucesso');
      navigate('/login');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);

      errors.map((error) => toast.error(error));
    }
  }

  return (
    <Container>
      <h1>Crie sua conta</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu Email"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sua senha"
          />
        </label>
        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  );
}
