import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testes do Header', () => {
  afterEach(cleanup);

  test('Ao carregar a aplicação o Header deve aparecer', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/INICIO/i)).toBeInTheDocument();
  });

  test('Ao navegar para a pagina do Blog, o header deve aparecer', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/BLOG/)).toBeInTheDocument();
    fireEvent.click(getByText(/BLOG/));
    expect(getByText(/INICIO/i)).toBeInTheDocument();
  });

  test('Ao navegar para a pagina da Loja, o header deve aparecer', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/LOJA/)).toBeInTheDocument();
    fireEvent.click(getByText(/LOJA/));
    expect(getByText(/INICIO/i)).toBeInTheDocument();
  });

  test('Ao navegar para a pagina de Podcasts, o header deve aparecer', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/PODCASTS/)).toBeInTheDocument();
    fireEvent.click(getByText(/PODCASTS/));
    expect(getByText(/INICIO/i)).toBeInTheDocument();
  });

  test('Ao navegar para a pagina de cursos, o header deve aparecer', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/CURSOS/)).toBeInTheDocument();
    fireEvent.click(getByText(/CURSOS/));
    expect(getByText(/INICIO/i)).toBeInTheDocument();
  });

  test('Ao navegar para a pagina de contato, o header deve aparecer', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/CONTATO/)).toBeInTheDocument();
    fireEvent.click(getByText(/CONTATO/));
    expect(getByText(/INICIO/i)).toBeInTheDocument();
  });

  test('Testando todos os item de navegação, 6 no total', () => {
    const { getByText } = renderWithRouter(<App />);
    const LINKS = document.getElementsByClassName('links');
    expect(LINKS.length).toBe(6);
  });
});
