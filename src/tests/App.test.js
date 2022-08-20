import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRounter';

describe('Tests if App component has a set of links', () => {
  it('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);
    const navLinkHome = screen.getByRole('link', { name: 'Home' });
    const navLinkAbout = screen.getByRole('link', { name: 'About' });
    const navLinkFavoritePokemons = screen.getByRole('link',
      { name: 'Favorite Pokémons' });

    expect(navLinkHome).toBeInTheDocument();
    expect(navLinkAbout).toBeInTheDocument();
    expect(navLinkFavoritePokemons).toBeInTheDocument();
  });

  it(`Teste se a aplicação é redirecionada para a página inicial, 
  na URL / ao clicar no link Home da barra de navegação`, () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: 'Home' });
    userEvent.click(linkHome);

    expect(history.location.pathname).toBe('/');
    console.log(history);
  });

  it(`Teste se a aplicação é redirecionada para a 
  página de About, na URL /about, ao clicar no link About da barra de navegação;`, () => {
    const { history } = renderWithRouter(<App />);
    const LinkAbout = screen.getByRole('link', { name: 'About' });
    userEvent.click(LinkAbout);

    expect(history.location.pathname).toBe('/about');
  });

  it(`Teste se a aplicação é redirecionada para a página de 
  Pokémons Favoritados, na URL /favorites, ao clicar no link 
  Favorite Pokémons da barra de navegação`, () => {
    const { history } = renderWithRouter(<App />);
    const LinkFavoritePokemons = screen
      .getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(LinkFavoritePokemons);
    expect(history.location.pathname).toBe('/favorites');
  });
  it(`Teste se a aplicação é redirecionada para a página
   Not Found ao entrar em uma URL desconhecida.`, () => {
    const { history } = renderWithRouter(<App />);
    history.push('/coisa');
    expect(history.location.pathname).toBe('/coisa');

    const texto = screen
      .getByRole('heading', { name: /page requested not found/i });
    expect(texto).toBeInTheDocument();
  });
});
