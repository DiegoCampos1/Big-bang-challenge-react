import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

test('Certificando que a pagina é carregada buscando pelo termo `Nossos especialistas`', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const heading = getByText(/Nossos especialistas/);
  expect(heading).toBeInTheDocument();
});

describe('Testes das rotas do App.js', () => {
  afterEach(cleanup);

  test('Ao carregar a aplicação no caminho de URL “/”, a página principal da Namah deve ser mostrada', () => {
    const { history } = renderWithRouter(<App />);
    const pathname = history.location.pathname;
    expect(pathname).toBe('/');
  });

  test('Ao clicar no link "INICIO" na barra de navegação, a aplicação deve ser redirecionada para a página inicial, na URL "/"', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/INICIO/i)).toBeInTheDocument();
    fireEvent.click(getByText(/INICIO/i));
    const pathname = location.pathname;
    expect(pathname).toBe('/');
  });

  test('Ao clicar no link "BLOG" na barra de navegação, a aplicação deve ser redirecionada para a página inicial, na URL "/blog"', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/BLOG/)).toBeInTheDocument();
    fireEvent.click(getByText(/BLOG/));
    const pathname = location.pathname;
    expect(pathname).toBe('/blog');
  });

  test('Ao clicar no link "BLOG" na barra de navegação, a aplicação deve ser redirecionada para a página inicial, na URL "/loja"', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/LOJA/)).toBeInTheDocument();
    fireEvent.click(getByText(/LOJA/));
    const pathname = location.pathname;
    expect(pathname).toBe('/loja');
  });

  test('Ao clicar no link "PODCASTS" na barra de navegação, a aplicação deve ser redirecionada para a página inicial, na URL "/podcasts"', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/PODCASTS/)).toBeInTheDocument();
    fireEvent.click(getByText(/PODCASTS/));
    const pathname = location.pathname;
    expect(pathname).toBe('/podcasts');
  });

  test('Ao clicar no link "CURSOS" na barra de navegação, a aplicação deve ser redirecionada para a página inicial, na URL "/cursos"', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/CURSOS/)).toBeInTheDocument();
    fireEvent.click(getByText(/CURSOS/));
    const pathname = location.pathname;
    expect(pathname).toBe('/cursos');
  });

  test('Ao clicar no link "CONTATO" na barra de navegação, a aplicação deve ser redirecionada para a página inicial, na URL "/contato"', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/CONTATO/)).toBeInTheDocument();
    fireEvent.click(getByText(/CONTATO/));
    const pathname = location.pathname;
    expect(pathname).toBe('/contato');
  });
});
