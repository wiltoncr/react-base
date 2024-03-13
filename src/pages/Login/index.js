import React from 'react';
import { useDispatch } from 'react-redux';
import { Title } from './styled';
import { Container } from '../../styles/GlocalStyles';

import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();
  function handClick(e) {
    e.preventDefault();
    dispatch(exampleActions.clicaBotaoRequest());
  }
  return (
    <Container>
      <Title />
      <p>Lorem*5</p>
      <button type="submit" onClick={handClick}>
        Enviar
      </button>
    </Container>
  );
}
