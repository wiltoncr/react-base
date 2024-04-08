import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import validator from 'validator';
import { useParams } from 'react-router-dom';
import { Container } from '../../styles/GlocalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';

export default function Aluno() {
  const { id } = useParams();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    async function getData() {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`/aluno/${id}`);
        const Foto = get(data, 'Fotos[0].url', '');
        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setAltura(data.altura);
        setEmail(data.email);
        setPeso(data.peso);
        setIdade(data.idade);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const erros = get(err, 'response.data.errors', []);

        if (status === 404) erros.map((error) => toast.error(error));
      }
    }
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;
    if (nome.length < 3 || nome.length > 255) {
      toast.error('Nome deve ter de 3 a 255 caracteres');
      formErrors = true;
    }
    if (sobrenome.length < 3 || nome.length > 255) {
      toast.error('Sobrenome deve ter de 3 a 255 caracteres');
      formErrors = true;
    }
    if (!validator.isEmail(email)) {
      toast.error('Email é inválido');
      formErrors = true;
    }
    if (!validator.isInt(String(idade)) || idade <= 0) {
      toast.error('idade inválida');
      formErrors = true;
    }
    if (!validator.isFloat(String(peso)) || !peso <= 0) {
      toast.error('peso inválido');
      formErrors = true;
    }
    if (!validator.isFloat(String(altura)) || !altura <= 0) {
      toast.error('altura inválida');
      formErrors = true;
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Editar Aluno' : 'Novo Aluno'}</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          placeholder="Sobrenome"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          placeholder="Idade"
        />
        <input
          type="text"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="peso"
        />
        <input
          type="text"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Altura"
        />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}

Aluno.protoTypes = {
  match: PropTypes.shape({}).isRequired,
};
