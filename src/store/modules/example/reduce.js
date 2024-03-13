import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

// eslint-disable-next-line default-param-last
export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Deu certo');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro');
      return state;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou na request');
      return state;
    }
    default: {
      return state;
    }
  }
}
