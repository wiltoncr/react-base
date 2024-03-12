import React from 'react';
import { Title } from './styled';
import { Container } from '../../styles/GlocalStyles';

import axios from '../../services/axios';

export default function Login() {
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/aluno');
      console.log(response);
    }
    getData();
  }, []);
  return (
    <Container>
      <Title />
      <p>Lorem*5</p>
      <button type="submit">teste</button>
    </Container>
  );
}
