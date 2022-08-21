import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRounter';
import App from '../App';

describe('Teste o componente Pokemon js', () => {
  it('O nome correto do pokémon deve ser mostrado na tela', () => {
    const { history } = renderWithRouter(<App />);

    const nomeCorreto = screen.getByText(/pikachu/i);
    expect(nomeCorreto).toBeInTheDocument();

    const tipo = screen.getByTestId('pokemon-type');
    expect(tipo).toBeInTheDocument();
    expect(tipo).toHaveTextContent('Electric');

    const peso = screen.getByText(/average weight: 6\.0 kg/i);
    expect(peso).toBeInTheDocument();

    const imagPokemon = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(imagPokemon).toBeInTheDocument();
    expect(imagPokemon).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(imagPokemon).toHaveAttribute('alt', 'Pikachu sprite');

    const link = screen.getByRole('link', { name: /more details/i });
    userEvent.click(link);
    expect(history.location.pathname).toBe('/pokemons/25');

    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(checkbox);

    const favorito = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(favorito).toBeInTheDocument();
    expect(favorito).toHaveAttribute('src', '/star-icon.svg');
    expect(favorito).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
});
