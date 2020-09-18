import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import Inicio from '../Pages/Inicio';
import renderWithRouter from './renderWithRouter';

describe('Testes da pagina Inicio', () => {
  afterEach(cleanup);

  test('Testando se temos um banner principal, e um botao', () => {
    const { getByRole } = renderWithRouter(<Inicio />);
    const input = document.getElementsByClassName('baner');
    expect(input.length).toBe(1);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    // console.log(imagens.length)
  });

  test('Testando se a pagina de inicio contem 8 imagens', () => {
    const { getAllByRole } = renderWithRouter(<Inicio />);
    const imagens = getAllByRole('img');
    expect(imagens.length).toBe(8);
  });

  // test('Ao navegar para a pagina da Loja, o Footer deve aparecer', () => {
  //   const { getByText } = renderWithRouter(<App />);
  //   expect(getByText(/LOJA/)).toBeInTheDocument();
  //   fireEvent.click(getByText(/LOJA/));
  //   expect(getByText(/hello@espaconamah.com.br/i)).toBeInTheDocument();
  // });

  // test('Ao navegar para a pagina de Podcasts, o Footer deve aparecer', () => {
  //   const { getByText } = renderWithRouter(<App />);
  //   expect(getByText(/PODCASTS/)).toBeInTheDocument();
  //   fireEvent.click(getByText(/PODCASTS/));
  //   expect(getByText(/hello@espaconamah.com.br/i)).toBeInTheDocument();
  // });

  // test('Ao navegar para a pagina de cursos, o Footer deve aparecer', () => {
  //   const { getByText } = renderWithRouter(<App />);
  //   expect(getByText(/CURSOS/)).toBeInTheDocument();
  //   fireEvent.click(getByText(/CURSOS/));
  //   expect(getByText(/hello@espaconamah.com.br/i)).toBeInTheDocument();
  // });

  // test('Ao navegar para a pagina de contato, o Footer deve aparecer', () => {
  //   const { getByText } = renderWithRouter(<App />);
  //   expect(getByText(/CONTATO/)).toBeInTheDocument();
  //   fireEvent.click(getByText(/CONTATO/));
  //   expect(getByText(/hello@espaconamah.com.br/i)).toBeInTheDocument();
  // });

  // test('Testando se temos um input', () => {
  //   const { getByText } = renderWithRouter(<App />);
  //   const input = document.getElementsByClassName('inputFooter');
  //   expect(input.length).toBe(1);
  // });

  // test('Testando se temos a referencia a BIG BANG SHOP', () => {
  //   const { getByText } = renderWithRouter(<App />);
  //   expect(getByText(/BIG BANG SHOP/)).toBeInTheDocument();

  // });
});
