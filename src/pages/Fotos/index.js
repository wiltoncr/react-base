import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from '../../styles/GlocalStyles';
import Loading from '../../components/Loading';
import { Title, Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Fotos() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [foto, setFoto] = useState('');
  const handleChange = async (e) => {
    const file = e.target.files[0];
    const fotoURL = URL.createObjectURL(file);
    setFoto(fotoURL);
    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('foto', file);

    try {
      setIsLoading(true);
      await axios.post('/fotos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Foto enviada');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const { status } = get(err, 'response', '');
      toast.error('Erro ao enviar');

      if (status === 401) dispatch(actions.loginFailure());
    }
  };
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`aluno/${id}`);
        setFoto(get(data, 'Fotos[0].url', ''));
        setIsLoading(false);
      } catch {
        toast.error('Erro ao obter imagem');
        setIsLoading(false);
        history.push('/');
      }
    };
    getData();
  }, [id]);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Fotos</Title>
      <Form>
        <label htmlFor="foto">
          {foto ? <img src={foto} alt="foto" /> : 'Selecionar'}
          <input type="file" id="foto" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}

Fotos.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
