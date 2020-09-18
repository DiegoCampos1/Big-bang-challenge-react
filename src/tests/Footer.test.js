import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testes do Footer', () => {
  afterEach(cleanup);

  test('Ao carregar a aplicação o Footer deve aparecer', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/hello@espaconamah.com.br/i)).toBeInTheDocument();
  });

  test('Ao navegar para a pagina do Blog, o Footer deve aparecer', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/BLOG/)).toBeInTheDocument();
    fireEvent.click(getByText(/BLOG/));
    expect(getByText(/hello@espaconamah.com.br/i)).toBeInTheDocument();
  });

  test('Ao navegar para a pagina da Loja, o Footer deve aparecer', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/LOJA/)).toBeInTheDocument();
    fireEvent.click(getByText(/LOJA/));
    expect(getByText(/hello@espaconamah.com.br/i)).toBeInTheDocument();
  });

  test('Ao navegar para a pagina de Podcasts, o Footer deve aparecer', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/PODCASTS/)).toBeInTheDocument();
    fireEvent.click(getByText(/PODCASTS/));
    expect(getByText(/hello@espaconamah.com.br/i)).toBeInTheDocument();
  });

  test('Ao navegar para a pagina de cursos, o Footer deve aparecer', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/CURSOS/)).toBeInTheDocument();
    fireEvent.click(getByText(/CURSOS/));
    expect(getByText(/hello@espaconamah.com.br/i)).toBeInTheDocument();
  });

  test('Ao navegar para a pagina de contato, o Footer deve aparecer', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/CONTATO/)).toBeInTheDocument();
    fireEvent.click(getByText(/CONTATO/));
    expect(getByText(/hello@espaconamah.com.br/i)).toBeInTheDocument();
  });

  test('Testando se temos um input', () => {
    const { getByText } = renderWithRouter(<App />);
    const input = document.getElementsByClassName('inputFooter');
    expect(input.length).toBe(1);
  });

  test('Testando se temos a referencia a BIG BANG SHOP', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/BIG BANG SHOP/)).toBeInTheDocument();

  });
});
