import styled from 'styled-components';
import * as fonts from '../../config/fonts';

export const Title = styled.h1`
  font-family: ${fonts.titulo};
  font-size: 28px;
  line-height: 1.2;
  letter-spacing: -0.03px;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 20px;
    height: 40px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
`;
