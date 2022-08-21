import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRounter';

describe('Teste o componente, Pokemon Favorito', () => {
  it(`Teste se é exibida na tela a mensagem 
  No favorite pokemon found, caso a pessoa 
  não tenha pokémons favoritos`, () => {
    const { history } = renderWithRouter(<App />);
    history.push('/favorites');

    const paragrafo1 = screen.getByText(/no favorite pokemon found/i);
    expect(paragrafo1).toBeInTheDocument('No favorite pokemon found');
  });
  it('Teste se são exibidos todos os cards de pokémons favoritados.', () => {
    const { history } = renderWithRouter(<App />);

    const detalhes = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detalhes);

    const checkBox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(checkBox);

    history.push('/favorites');

    const nome = screen.getByText(/pikachu/i);
    expect(nome).toBeInTheDocument();
  });
});
